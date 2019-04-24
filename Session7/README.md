# homework
This work is about random drops, i can set the speed and number of drops. It also use the array. And i give the textures to different cubes.

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/7.png)

# Usage

First i define 'cubesNum = 10', and then define the array of 'i', it is the number of the cubes. And the cubes will select the random textures in the folder that i created.

```javascript
var cubesNum = 10;
// Create a geometry
// 	Create a box (cube) of 10 width, length, and height
geometry = new THREE.BoxGeometry( 10, 10, 10 );

for(let i=0; i<cubesNum; i++){
  var randomValue = Math.random() * 0.5;
  speed.push(randomValue);

  //Generate a random number from 1 to 4(according to image files)
  var randomSelection = Math.round(Math.random()*4) + 1;
  // Load a texture
  texture = new THREE.TextureLoader().load( "textures/texture" + randomSelection+".jpg");

  // Create a MeshBasicMaterial with a loaded texture
  material = new THREE.MeshBasicMaterial( { map: texture} );

  // Combine the geometry and material into a mesh
  mesh = new THREE.Mesh( geometry, material );
  // Add the mesh to the scene
  mesh.position.y = 30;


  scene.add( mesh );
  cubes.push( mesh );
}
```

This part is about the random speed of drops, set the array'i' for the different speed and position of cubes.

```javascript
function animate() {
	// Call the requestAnimationFrame function on the animate function
	// 	(thus creating an infinite loop)
	requestAnimationFrame( animate );

	for(var i=0; i<cubesNum; i++){

		// Rotate the x position of the mesh by 0.03
		cubes[i].rotation.x += speed[i] / 100;
		// Rotate the y position of the mesh by 0.02
		cubes[i].rotation.y += speed[i] / 80;
		//Move the mesh towards the bottom of the screen
		cubes[i].position.y -= speed[i];

		//If the mesh passes the bottom of the screen,
		//make it appear on the top. Also x position is randomized
		if (cubes[i].position.y <- 30){
			cubes[i].position.y = 35;
			cubes[i].position.x = (Math.random()*-20) +10;
			cubes[i].scale.x = Math.random();
			cubes[i].scale.y = Math.random();
			cubes[i].scale.z = Math.random();
		}
	}
		// Render everything using the created renderer, scene, and camera
		renderer.render( scene, camera );
	}
```
