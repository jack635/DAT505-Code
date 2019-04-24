var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(20, 20, 40);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 2000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x000000);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera,renderer.domElement);

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

function drawFrame(){
  requestAnimationFrame(drawFrame);

  rot += 0.01;
  cubes.forEach(function(c,i){
    c.rotation.x = rot;
    c.rotation.y = rot;

  });


  renderer.render(scene, camera);
}

init();
drawFrame();
