# homework

This work use the fps control, and randomly generate cubes in the scene. You can use your mouse to control the view.

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/6.png)

# Usage

This is the setup for the view control, FirstPersonControls and fps control. It need the components of threejs. And set PerspectiveCamera for it. This way the view can be rotated with the mouse and the mouse clicks closer.

```javascript
function setup() {
  document.body.style.backgroundColor = '#d7f0f7';
  setupThreeJS();
  setupWorld();

  requestAnimationFrame(function animate() {
    draw();

    frameDelta += clock.getDelta();
    while (frameDelta >= INV_MAX_FPS) {
      update(INV_MAX_FPS);
      frameDelta -= INV_MAX_FPS;
    }

    requestAnimationFrame( animate );
  });
}

function setupThreeJS() {
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x9db3b5, 0.002);

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.y = 400;
  camera.position.z = 400;
  camera.rotation.x = -45 * Math.PI / 180;

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMapEnabled = true;
  renderer.setClearColor(0x17293a, 1);

  document.body.appendChild( renderer.domElement );

  clock = new THREE.Clock();
  controls = new THREE.FirstPersonControls(camera);
  controls.movementSpeed = 90;
  controls.lookSpeed = 0.06;
}
```

First i create a PlaneGeometry as a floor, i set the size and MeshPhongMaterial, then set the rotationx.

```javascript
//Create the geometry for the floor
var geo = new THREE.PlaneGeometry(2000, 2000, 40, 40);
var mat = new THREE.MeshPhongMaterial({color: 0x9db3b5, overdraw: true});
floor = new THREE.Mesh(geo, mat);
floor.rotation.x = -0.5 * Math.PI;
floor.receiveShadow = true;
scene.add(floor);
```

This part about the array that i create for the cubes appearing in the scene. The 'i' is the number of cubes. They have the random position. Each time the page refreshes, it appears in a different location.

```javascript
for (var i = 0; i < 1000; i++) {
  //Create geometry as a clone
  var building = new THREE.Mesh(geometry.clone());

  //Randomize position and scale of the buildings
  building.position.x = Math.floor( Math.random() * 200 - 100 ) * 4;
  building.position.z = Math.floor( Math.random() * 200 - 100 ) * 4;
  building.position.y = Math.floor( Math.random() * 100 - 50 ) ;
  building.scale.x  = 10;
  building.scale.y  =10;
  building.scale.z  = 10;
```
