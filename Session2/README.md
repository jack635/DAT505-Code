# homework
In this homework, i change the geometry to SphereGeometry, and give them some different textures, they have the different position, so they just look like that.

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/2.png)

# Usage

This is the definition of the shape of the geometry

```javascript
var geometry = new THREE.SphereGeometry(50, 50, 50);
```

This is the definition of material and using of the texture, it loads the texture from the folder that i created

```javascript
var texture1 = new THREE.TextureLoader().load("textures/1.jpg");
var material8 = new THREE.MeshBasicMaterial( { map: texture1} );
```

Then define the mesh and use the material that i defined before, and set the position for it. I create mesh 1 to 12, and added them into the scene

```javascript
var mesh1 = new THREE.Mesh( geometry, material8 );
mesh1.position.z = -1000;
mesh1.position.y = 100;
```

I set a rot = 0, and then set rotation Angle speed for the mesh

```javascript
var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; //Continuously rotate the mesh
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2; //Continuously rotate the mesh
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot; //Continuously rotate the mesh
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2; //Continuously rotate the mesh
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+1; //Continuously rotate the mesh
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot; //Continuously rotate the mesh
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2; //Continuously rotate the mesh
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot; //Continuously rotate the mesh
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2; //Continuously rotate the mesh
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot; //Continuously rotate the mesh
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot; //Continuously rotate the mesh
  mesh12.rotation.y = rot;

  // Render the scene
  renderer.render(scene, camera);
};
```
