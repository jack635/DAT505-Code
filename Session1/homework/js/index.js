//Global variables
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6;
var geometry7, material7, mesh7;

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
  geometry1 = new THREE.SphereGeometry(60, 60, 60);
  material1 = new THREE.MeshBasicMaterial( { color: "#EE82EE" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh1 );

  // Create a Cube Mesh with basic material ---------
  geometry2 = new THREE.SphereGeometry(60, 60, 60);
  material2 = new THREE.MeshBasicMaterial( { color: "#00CED1" } );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1000;
  mesh2.position.x = 0.0009;

  // Add mesh to scene
  scene.add( mesh2 );

  // Create a Cube Mesh with basic material ---------
  geometry3 = new THREE.TorusGeometry(200, 2, 160, 800);
  material3 = new THREE.MeshBasicMaterial( { color: "#4682B4" } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;
  //mesh2.position.y = -100;

  // Add mesh to scene
  scene.add( mesh3 );

  // Create a Cube Mesh with basic material ---------
  geometry4 = new THREE.TorusGeometry(200, 2, 160, 800);
  material4 = new THREE.MeshBasicMaterial( { color: "#4682B4" } );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -1000;
  //mesh2.position.y = -100;

  // Add mesh to scene
  scene.add( mesh4 );

  // Create a Cube Mesh with basic material ---------
  geometry5 = new THREE.TorusGeometry(200, 2, 160, 800);
  material5 = new THREE.MeshBasicMaterial( { color: "#4682B4" } );
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh5.position.z = -1000;
  //mesh2.position.y = -100;

  // Add mesh to scene
  scene.add( mesh5 );

  // Create a Cube Mesh with basic material ---------
  geometry6 = new THREE.TorusGeometry(200, 2, 160, 800);
  material6 = new THREE.MeshBasicMaterial( { color: "#4682B4" } );
  mesh6 = new THREE.Mesh( geometry6, material6 );
  mesh6.position.z = -1000;
  //mesh2.position.y = -100;

  // Add mesh to scene
  scene.add( mesh6 );

  // Create a Cube Mesh with basic material ---------
  geometry7 = new THREE.TorusGeometry(200, 2, 160, 800);
  material7 = new THREE.MeshBasicMaterial( { color: "#4682B4" } );
  mesh7 = new THREE.Mesh( geometry7, material7 );
  mesh7.position.z = -1000;
  //mesh2.position.y = -100;

  // Add mesh to scene
  scene.add( mesh7 );

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;

  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.x += 0.01;
  
  mesh3.rotation.x += 0.01; //Continuously rotate the mesh
  mesh3.rotation.x += 0.01;

  mesh4.rotation.y += 0.01; //Continuously rotate the mesh
  mesh4.rotation.y += 0.01;

  mesh5.rotation.z += 0.01; //Continuously rotate the mesh
  mesh5.rotation.z += 0.01;

  mesh6.rotation.x += 0.01; //Continuously rotate the mesh
  mesh6.rotation.y += 0.01;

  mesh7.rotation.z += 0.01; //Continuously rotate the mesh
  mesh7.rotation.x += 0.01;



  renderer.setClearColor("#EE7621");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
