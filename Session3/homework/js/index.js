//Global variables
var scene, camera, renderer;
var geometry1, wireframe1, line1,material1;
var geometry2, material2, mesh1;
var geometry3, material3, plane1;
var geometry4, wireframe2, line2,material4;
var geometry5, wireframe3, line3,material5;

var texture1 = new THREE.TextureLoader().load( "textures/4.jpg" );
material2 = new THREE.MeshBasicMaterial( { map: texture1} );

//Rotation converter
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};


function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}



function geometry(){
  // Create a Cube Mesh with basic material ---------

  geometry1 = new THREE.IcosahedronBufferGeometry( 1500, 1 );
  wireframe1 = new THREE.WireframeGeometry( geometry1 );
  material1 = new THREE.MeshBasicMaterial( { color: "#000000" } );
  //material1 = new THREE.MeshNormalMaterial();
  line1 = new THREE.LineSegments( wireframe1,material1 );
  //line1.material.depthTest = false;
  //line1.material.opacity = 1;
  //line1.material.transparent = true;
  line1.position.z = -8000;

  // Add mesh to scene
  scene.add( line1 );


  geometry2 = new THREE.SphereGeometry(600, 600, 600);
  //material2 = new THREE.MeshBasicMaterial( { color: "#DC143C" } );
  //material2 = new THREE.MeshBasicMaterial( { map: texture} );
  mesh1 = new THREE.Mesh( geometry2, material2 );
  mesh1.position.z = -8000;
  //mesh1.position.x = 0.0009;

  // Add mesh to scene
  scene.add( mesh1 );


  geometry3 = new THREE.RingGeometry( 1000000, 150,8000 );
  wireframe2 = new THREE.WireframeGeometry( geometry3 );
  material4 = new THREE.MeshBasicMaterial( { color: "#000000" } );
  //material1 = new THREE.MeshNormalMaterial();
  line2 = new THREE.LineSegments( wireframe2,material4 );
  //line1.material.depthTest = false;
  //line1.material.opacity = 1;
  //line1.material.transparent = true;
  //line2.position.x = -5000;
  //line2.position.y = 1000;
  line2.position.z = -10000;
  line2.rotation.z = de2ra(-90);

  // Add mesh to scene
  scene.add( line2 );

  geometry4 = new THREE.RingGeometry( 800000, 150,1000 );
  wireframe3 = new THREE.WireframeGeometry( geometry4 );
  material5 = new THREE.MeshBasicMaterial( { color: "#FFFFFF" } );
  //material1 = new THREE.MeshNormalMaterial();
  line3 = new THREE.LineSegments( wireframe3,material5 );
  //line1.material.depthTest = false;
  //line1.material.opacity = 1;
  //line1.material.transparent = true;
  //line2.position.x = -5000;
  //line2.position.y = 1000;
  line3.position.z = -10000;
  //line3.roation.set(0,0,0)
  line3.rotation.z = de2ra(-90);

  // Add mesh to scene
  scene.add( line3 );



}


// Render Loop
var render = function () {
  requestAnimationFrame( render );

  line1.rotation.x += 0.01; //Continuously rotate the mesh
  line1.rotation.y += 0.01;

  //mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.05;
  mesh1.rotation.z += 0.05;

  line2.rotation.x += 0; //Continuously rotate the mesh
  line2.rotation.y += 0;
  line2.rotation.z += 0;

  line3.rotation.x += 0; //Continuously rotate the mesh
  line3.rotation.y += 0;
  line3.rotation.z += 0.0001;

  renderer.setClearColor("#FFFFFF");

  // Render the scene
  renderer.render(scene, camera);
};

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
init();
geometry();
render();
