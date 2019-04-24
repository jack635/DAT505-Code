# Final Project
In my final assignment, I tried to create an immersive space, but due to limited technology, it may not achieve the desired effect. After overcoming many difficulties, I finally finished my work.For my final project, I used a first-person view, where you can mouse through the entire scene. I used the water and sky box to show the big atmosphere, and added a little fog effect. Then the ship model is imported and generated at random positions and angles. Two pieces of background music were added as an aid. I was inspired by the scenes in the movie, and I wanted to build a real interactive scene that could view the whole scene through control. But I still have some questions about the motion of the model, I can only make the model rotate, I can't make it move. If these problems are solved, I believe my final assignment will be better. Here is the result of my final assignment.

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/Final.gif)

This part is about first person control, I can control the speed of the movement and the change of perspective. And import the first person components in the HTML.

```javascript
var INV_MAX_FPS = 1 / 100, frameDelta = 0;
var clock = new THREE.Clock();
requestAnimationFrame(function animate() {
	draw();

	frameDelta += clock.getDelta();
	while (frameDelta >= INV_MAX_FPS) {
		update(INV_MAX_FPS);
		frameDelta -= INV_MAX_FPS;
	}

	requestAnimationFrame( animate );
});

//Firstperson control
controls = new THREE.FirstPersonControls( camera );
controls.movementSpeed = 200;
controls.lookSpeed = 0.05;
controls.lookVertical = true;
```

This is about the sky box, which is textured from six sides.
![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/Final1.png)

```javascript
// add a skybox background
var cubeTextureLoader = new THREE.CubeTextureLoader();
cubeTextureLoader.setPath( 'textures/cube/skybox1/' );
var cubeTexture = cubeTextureLoader.load( [
  'px.jpg', 'nx.jpg',
  'py.jpg', 'ny.jpg',
  'pz.jpg', 'nz.jpg',
] );
scene.background = cubeTexture;
```



```javascript
for (var i=0; i<10; i++){
  // Model/material loading!
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("models/4.mtl", function(materials){

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);

    objLoader.load("models/4.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 5;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*2000-400,  2, Math.random()*2000-400);
      mesh.rotation.y = Math.PI/Math.random()*1;
      mesh.rotation.x += 360*Math.random();
      var randomValueX = (Math.random()*0.1) - 0.05;
      var randomValueY = (Math.random()*0.1) - 0.05;
      randomRotationX.push(randomValueX);
      randomRotationY.push(randomValueY);

      scene.add(mesh);
      cubes.push(mesh); //Add to the array so that we can access for raycasting
    });
  });
}

```
