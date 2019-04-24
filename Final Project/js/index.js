if ( WEBGL.isWebGLAvailable() === false ) {
document.body.appendChild( WEBGL.getWebGLErrorMessage() );
}
var scene, camera, renderer, water;
var cubes = [];
var randomRotationX = [];
var randomRotationY = [];
var INV_MAX_FPS = 1 / 100, frameDelta = 0;


var clock = new THREE.Clock();

requestAnimationFrame(function animate() {
	draw();

	frameDelta += clock.getDelta();
	while (frameDelta >= INV_MAX_FPS) {
		update(INV_MAX_FPS);
		frameDelta -= INV_MAX_FPS;
	}

	requestAnimationFrame( animate );
});
function draw() {
	renderer.render( scene, camera );
}

function init() {
	// scene
	scene = new THREE.Scene();

  //fog
	scene.fog = new THREE.FogExp2(0xffffff,0.0005);


	// camera
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 10000 );
	camera.position.set( 800, 100, 1500 );
	camera.lookAt( scene.position );

	//Firstperson control
	controls = new THREE.FirstPersonControls( camera );
	controls.movementSpeed = 200;
	controls.lookSpeed = 0.05;
	controls.lookVertical = true;

	// add a skybox background
	var cubeTextureLoader = new THREE.CubeTextureLoader();
	cubeTextureLoader.setPath( 'textures/cube/skybox1/' );
	var cubeTexture = cubeTextureLoader.load( [
		'px.jpg', 'nx.jpg',
		'py.jpg', 'ny.jpg',
		'pz.jpg', 'nz.jpg',
	] );
	scene.background = cubeTexture;

	var light = new THREE.DirectionalLight( 0xaabbff, 2 );
					light.position.x = 300;
					light.position.y = 250;
					//light.position.z = - 500;
					scene.add( light );


	var object;

	var objects = [];

	var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );

	for (var i=0; i<10; i++){
		// Model/material loading!
		var mtlLoader = new THREE.MTLLoader();
		mtlLoader.load("models/4.mtl", function(materials){

			materials.preload();

			var objLoader = new THREE.OBJLoader();
			objLoader.setMaterials(materials);

			objLoader.load("models/4.obj", function(mesh){
				mesh.traverse(function(node){
					if( node instanceof THREE.Mesh ){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				var sizeRand = Math.random() * 5;
				mesh.scale.set(sizeRand,sizeRand,sizeRand);
				mesh.position.set(Math.random()*2000-400,  2, Math.random()*2000-400);
				mesh.rotation.y = Math.PI/Math.random()*1;
				mesh.rotation.x += 360*Math.random();
				var randomValueX = (Math.random()*0.1) - 0.05;
				var randomValueY = (Math.random()*0.1) - 0.05;
				randomRotationX.push(randomValueX);
				randomRotationY.push(randomValueY);

				scene.add(mesh);
				cubes.push(mesh); //Add to the array so that we can access for raycasting
			});
		});
	}

	// ground
	var groundGeometry = new THREE.PlaneBufferGeometry( 10000, 10000, 10, 10 );
	var groundMaterial = new THREE.MeshBasicMaterial( { color: 0xcccccc } );
	var ground = new THREE.Mesh( groundGeometry, groundMaterial );
	ground.rotation.x = Math.PI * - 0.5;
	scene.add( ground );
	var textureLoader = new THREE.TextureLoader();
	textureLoader.load( 'textures/floors/6.jpg', function ( map ) {
		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 16;
		map.repeat.set( 1, 1 );
		groundMaterial.map = map;
		groundMaterial.needsUpdate = true;
	} );

	// water
	var waterGeometry = new THREE.PlaneBufferGeometry( 10000, 10000 );
	var flowMap = textureLoader.load( 'textures/water/Water_1_M_Flow.jpg' );
	water = new THREE.Water( waterGeometry, {
		scale: 20,
		textureWidth: 1024,
		textureHeight: 1024,
		flowMap: flowMap
	} );
	water.position.y = 1;
	water.rotation.x = Math.PI * - 0.5;
	scene.add( water );
	//Music
	function swap_music() {
		var oAudio = document.getElementById('myaudio');
		if (oAudio.paused) {
			oAudio.play();
		}
		else {
			oAudio.pause();
		}
	}

	// flow map helper
	var helperGeometry = new THREE.PlaneBufferGeometry( 100, 100 );
	var helperMaterial = new THREE.MeshBasicMaterial( { map: flowMap } );
	var helper = new THREE.Mesh( helperGeometry, helperMaterial );
	helper.position.y = 1.01;
	helper.rotation.x = Math.PI * - 0.5;
	helper.visible = false;
	scene.add( helper );

	// renderer
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setPixelRatio( window.devicePixelRatio );
	document.body.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onResize, false );
}
function onResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
	requestAnimationFrame( animate );
	/*	cubes.forEach(function(c, i) {
	c.rotation.x += randomRotationX[i];
	c.rotation.y += randomRotationY[i];
});*/

render();
}
function render() {
	controls.update( clock.getDelta() );
	renderer.render( scene, camera );
}

function update(delta) {
	controls.update(delta);
	if(controls.object.position.y < water.position.y + 20){
		controls.object.position.y = 20;
	}
}


init();
animate();
