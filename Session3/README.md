# homework
After many attempts, I finally made this homework. I found that overlap two RingGeometry can make someting very cool. One is black, one is white. And it makes that look like kaleidoscope. It has a net structure, two parts are intertwined. If change the rotation and position, it will have different effects. IcosahedronBufferGeometry and SphereGeometry are just to modify the RingGeometry, to have contrast. If give the RingGeometry speed, it may feels like the time become slow. By the side, i also added the GUI controller to RingGeometry, you can control how many parts they can on the screen.

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/3.png)

# Usage

I create IcosahedronBufferGeometry，SphereGeometry，RingGeometry for my project.I overlap two RingGeometry and use it as my background. The geometry1 is WireframeGeometry. And i use a texture for geometry2. Put them together and  finally make something very interesting.

```javascript
function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.IcosahedronBufferGeometry( 1500, 1 );
  wireframe1 = new THREE.WireframeGeometry( geometry1 );
  material1 = new THREE.MeshBasicMaterial( { color: "#000000" } );
  line1 = new THREE.LineSegments( wireframe1,material1 );
  line1.position.z = -8000;

  // Add mesh to scene
  scene.add( line1 );

  var texture1 = new THREE.TextureLoader().load( "textures/4.jpg" );
  material2 = new THREE.MeshBasicMaterial( { map: texture1} );
  geometry2 = new THREE.SphereGeometry(600, 600, 600);
  mesh1 = new THREE.Mesh( geometry2, material2 );
  mesh1.position.z = -8000;

  // Add mesh to scene
  scene.add( mesh1 );


  geometry3 = new THREE.RingGeometry( 1000000, 150,8000 );
  wireframe2 = new THREE.WireframeGeometry( geometry3 );
  material4 = new THREE.MeshBasicMaterial( { color: "#000000" } );
  line2 = new THREE.LineSegments( wireframe2,material4 );
  line2.position.z = -10000;
  line2.rotation.z = de2ra(-90);

  // Add mesh to scene
  scene.add( line2 );

  geometry4 = new THREE.RingGeometry( 800000, 150,1000 );
  wireframe3 = new THREE.WireframeGeometry( geometry4 );
  material5 = new THREE.MeshBasicMaterial( { color: "#FFFFFF" } );
  line3 = new THREE.LineSegments( wireframe3,material5 );
  line3.position.z = -10000;
  line3.rotation.z = de2ra(-90);

  scene.add( line3 );

}
```

I add two gui controller for my work, It's mostly about control RingGeometry. you can change the rotationX,Y,Z to cnotrol the background. First i should define the gui and controller, and then define f1 to control the things i need.

```javascript
var gui1 = new dat.GUI();
//GUI - Setup the GUI controller
var controller1 = new function() {
  this.rotationX = 0.01;
  this.rotationY = 0.01;
  this.rotationZ = 0.01;
}();
var f1 = gui1.addFolder('Rotation');
f1.add(controller1, 'rotationX', 0, 1).onChange( function() {
  line3.rotation.x = de2ra(controller1.rotationX);
});
f1.add(controller1, 'rotationY', 0, 0.1).onChange( function() {
  line3.rotation.y = de2ra(controller1.rotationY);
});
f1.add(controller1, 'rotationZ', 0, 0.1).onChange( function() {
  line3.rotation.z = de2ra(controller1.rotationZ);

});

var gui2 = new dat.GUI();
//GUI - Setup the GUI controller
var controller2 = new function() {
  this.rotationX = 0.01;
  this.rotationY = 0.01;
  this.rotationZ = 0.01;
}();
var f2 = gui2.addFolder('Rotation');
f2.add(controller2, 'rotationX', 0, 1).onChange( function() {
  line3.rotation.x = de2ra(controller2.rotationX);
});
f2.add(controller2, 'rotationY', 0, 0.1).onChange( function() {
  line3.rotation.y = de2ra(controller2.rotationY);
});
f2.add(controller2, 'rotationZ', 0, 0.1).onChange( function() {
  line3.rotation.z = de2ra(controller2.rotationZ);

});
```
