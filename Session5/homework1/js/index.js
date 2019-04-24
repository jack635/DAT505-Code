var renderer, scene, camera;
var cubes = [];
var randomSpeedX = [];


function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 10);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);


  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <= 10; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -10; y <= 10; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});

      if (x==-5&&y==-5){
        boxMaterial = new THREE.MeshLambertMaterial({color:  0xFF00FF});
      }else if (x==5&&y==5){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0x0000FF});
      }else {
        boxMaterial = new THREE.MeshLambertMaterial({color:0xFFFFFF});
      }

      var box = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      box.position.x = x;
      box.position.z = y;

      box.rotation.x = Math.random()*2*Math.PI;
      box.rotation.y = Math.random()*2*Math.PI;
      box.rotation.z = Math.random()*2*Math.PI;

      var randomValueX = (Math.random()*0.5)-0.25;
      randomSpeedX.push(randomValueX);

      console.log(randomValueX);

      scene.add(box);
      cubes.push(box);
    }
  }

  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);
  //rot += 0.01;
  //forEach takes all the array entries and passes the c as the object, and i as the index
  //cubes.forEach(function(c, i) {
  //c.rotation.x += randomRotationX[i]; //Rotate the object that is referenced in c
  //c.rotation.y += randomRotationY[i];
  //});
  cubes[6].rotation.x += randomSpeedX[6];
  cubes[18].rotation.x += randomSpeedX[18];
  renderer.render(scene, camera);
}

init();
drawFrame();
