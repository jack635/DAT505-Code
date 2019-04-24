# homework

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/9.png)
# Usage

Firet, i define the container, stats, camera, scene, raycaster, renderer. And then give the objects an array. Then i need use the function of audioLoader, so i define listener, sound, audioLoader.

```javascript
var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
var object;

var objects = [];

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();

// create a global audio source
var sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
```

This part USES mtlLoader and objLoader to load materials and models and USES array to determine the amount it produces. And I defined the random sizes of scale and position and rotation. This allows the model to appear in any size and position on the screen each time you refresh the page. Then i add the models into the scene.

```javascript
for (var i=0; i<500; i++){
// Model/material loading!
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("Blocks.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("ship.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 0.5;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*800-400, Math.random()*800-400, Math.random()*800-400);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh); //Add to the array so that we can access for raycasting
    });
  });
}
```

This part is using the sound loader to load the audio sources that I store in the audio folder.Each time the mouse is over the model, it loads the audio source that I added.

```javascript
audioLoader.load( 'audio/Diploship-Fly.wav', function( buffer ) {
  sound.setBuffer( buffer );
  sound.setLoop( false );
  sound.setVolume( 0.5 );
  sound.play();
});
```

This part is used to determine when your mouse on the model, the color of the model can change. Every time when the mouse on a model, the color of it will become a 0 xff0000.

```javascript
if ( intersects.length > 0 ) {
  if ( INTERSECTED != intersects[ 0 ].object ) {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = intersects[ 0 ].object;
    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    INTERSECTED.material.emissive.setHex( 0xff0000 );

  }
} else {
  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  INTERSECTED = null;
}
```
