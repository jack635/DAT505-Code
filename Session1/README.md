# homework
I just overlap two SphereGeometry with same size but different colors, make them have the same position.z but just a little bit diffrerent position.x, make them look like pixels. At the same time, i make five TorusGeometry with same size turn around the SphereGeometry. Also i let them have the speed like 'mesh.rotation.x += 0.01;  mesh.rotation.y += 0.01; '. I just try to make my work look like technology.

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/1.png)
# Usage

This is definition, i define scene, camera, renderer, geometry, material, mesh.

```javascript
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6;
var geometry7, material7, mesh7;
```

This is the SphereGeometry which overlap with each other and the TorusGeometry, i set the position and size, and set the MeshBasicMaterial for it,then add them into the scene.

```javascript
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

  // Add mesh to scene
  scene.add( mesh3 );

  // Create a Cube Mesh with basic material ---------
  geometry4 = new THREE.TorusGeometry(200, 2, 160, 800);
  material4 = new THREE.MeshBasicMaterial( { color: "#4682B4" } );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh4 );

  // Create a Cube Mesh with basic material ---------
  geometry5 = new THREE.TorusGeometry(200, 2, 160, 800);
  material5 = new THREE.MeshBasicMaterial( { color: "#4682B4" } );
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh5.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh5 );

  // Create a Cube Mesh with basic material ---------
  geometry6 = new THREE.TorusGeometry(200, 2, 160, 800);
  material6 = new THREE.MeshBasicMaterial( { color: "#4682B4" } );
  mesh6 = new THREE.Mesh( geometry6, material6 );
  mesh6.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh6 );

  // Create a Cube Mesh with basic material ---------
  geometry7 = new THREE.TorusGeometry(200, 2, 160, 800);
  material7 = new THREE.MeshBasicMaterial( { color: "#4682B4" } );
  mesh7 = new THREE.Mesh( geometry7, material7 );
  mesh7.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh7 );

}
```

This is the angle of rotation, each has a different Angle to show different effects, to get what i want. Some just like 'x to x' or 'x to y', etc

```javascript
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
```
