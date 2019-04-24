# S4
This sessioin just use the array to line up all the cubes. It's different from what we learned before, i do not need to create so many cubes one by one, and to find their position. I just have to give it an interval to get what I want.

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/4.png)

# Usage

First i define the renderer, scene, camera, controls, cubes(array), rot.

```javascript
var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;
```

This part is the array of x,y,z and set the color for each part. And also i write 'console.log("X:"+x+",Y:"+y+", Z:" +z); ' to help me find their position. It is good for my observation. Then add mesh to scene. Then I use the if condition to select the part I want to change.

```javascript
//Create a two dimensional grid of objects, and position them accordingly
for (var x = -10; x <= 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
  for (var y = -10; y <= 10; y += 5) {
    for (var z = -10; z <= 10; z += 5) {

      //Concatenation of the x and y values(open Console to see)
      console.log("X:"+x+",Y:"+y+", Z:" +z);

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});

      if(x >= 0 && z>= 0 && y >=0){
        //x >= 0 this means that squares with values 0 and 5 are ture
        //y >= 0 this means that squares with values 0 and 5 are ture
        //z >= 0 this means that squares with values 0 and 5 are ture
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
      }else if ( x <= 0 && y >= 0 && z>= 0){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000});
      }else{
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF0F0F0});
      }
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.y = y;
      mesh.position.z = z;
      //mesh.scale.y = 0.5;
      scene.add(mesh);
      cubes.push(mesh);

    }

  }

}

document.body.appendChild(renderer.domElement);
}
```

This part is about the speed. I define the rot and let the cubes rotate.

```javascript
function drawFrame(){
  requestAnimationFrame(drawFrame);

  rot += 0.01;
  cubes.forEach(function(c,i){
    c.rotation.x = rot;
    c.rotation.y = rot;

  });

  renderer.render(scene, camera);
}
```
