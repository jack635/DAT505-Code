# homework1
I just find the two cubes(position) that i want to change from the array. And i give the cubes randomSpeed by 'randomValueX'.  Every time I refresh the page, they will have different speed, but the others will be the same all the time.

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/5.1.png)

# Usage

This is the total array, for the x = 5, y = 5, and the definition of  boxGeometry, boxMaterial.

```javascript
//Create a two dimensional grid of objects, and position them accordingly
for (var x = -10; x <= 10; x += 5) { // Start from -35 and sequentially add one every 5 pixels
  for (var y = -10; y <= 10; y += 5) {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    //The color of the material is assigned a random color
    var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
 }
}
```

These are the two cubes that i want to change, i just find the position of them and condition them. I set different colors for them. It USES the if condition. And set MeshLambertMaterial for  boxMaterial.

```javascript
if (x==-5&&y==-5){
  boxMaterial = new THREE.MeshLambertMaterial({color:  0xFF00FF});
}else if (x==5&&y==5){
  boxMaterial = new THREE.MeshLambertMaterial({color: 0x0000FF});
}else {
  boxMaterial = new THREE.MeshLambertMaterial({color:0xFFFFFF});
}

```

I set the random x, y, z for the cubes which i want to change and define the randomSpeedX to push randomValueX. So it can rotate randomly.

```javascript
box.rotation.x = Math.random()*2*Math.PI;
box.rotation.y = Math.random()*2*Math.PI;
box.rotation.z = Math.random()*2*Math.PI;

var randomValueX = (Math.random()*0.5)-0.25;
randomSpeedX.push(randomValueX);
```

This is the random speed, forEach takes all the array entries and passes the c as the object, and i as the index.

```javascript
function drawFrame(){
  requestAnimationFrame(drawFrame);
  cubes[6].rotation.x += randomSpeedX[6];
  cubes[18].rotation.x += randomSpeedX[18];
  renderer.render(scene, camera);
}
```

# homework2
This array have random speed and color. I set the random color as '{color: Math.random() * 0xFFFFFF} ', and set the random rotation and randomValueX,Y for the speed, then the cubes.push(mesh). After that you can see the random color and speed.

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/5.2.png)

# Usage

This is the array for the x and y, the x = 15, y = 15, and it create 15*15 cubes. And then just set the random rotation for the mesh. randomRotationX push randomValueX and randomRotationY push randomValueY. And then add them into the scene. Then let the cubes push mesh.

```javascript
//Create a two dimensional grid of objects, and position them accordingly
for (var x = -35; x < 40; x += 5) { // Start from -35 and sequentially add one every 5 pixels
  for (var y = -35; y < 40; y += 5) {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    //The color of the material is assigned a random color
    var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
    var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
    //mesh.castShadow = true;

    mesh.position.x = x;
    mesh.position.z = y;
    mesh.rotation.x += 360*Math.random();
    var randomValueX = (Math.random()*0.1) - 0.05;
    var randomValueY = (Math.random()*0.1) - 0.05;
    randomRotationX.push(randomValueX);
    randomRotationY.push(randomValueY);



    scene.add(mesh);
    cubes.push(mesh);
  }
}
```

This is the random speed, forEach takes all the array entries and passes the c as the object, and i as the index.

```javascript
function drawFrame(){
  requestAnimationFrame(drawFrame);
  cubes.forEach(function(c, i) {
    c.rotation.x += randomRotationX[i];
    c.rotation.y += randomRotationY[i];
  });

  renderer.render(scene, camera);
}
```
