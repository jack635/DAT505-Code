# homework1

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/8.1.png)
# Usage

This is the definition of camera, scene, renderer, mesh and array.

```javascript
var camera, scene, renderer, mesh;
var image;
var mouseX = 0, mouseY = 0;
var container;

var eyesNum = 5;
var eyes = [];
var xPos = [];
var yPos = [];
var xPosMap = [];
var yPosMap = [];

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
```

This part is the array for randomly appear of eyeball, first define the number of eyeballs as the array'i', and set the random position and scale of eyeballs, they also use the same array. I need to find out where they are and make sure they do not go off screen.

```javascript
for (var i = 0; i < eyesNum; i++) {
  mesh = new THREE.Mesh( geometry, material );

  xPos[i] = Math.random() * 100 - 50;
  yPos[i] = Math.random() * 100 - 50;

  xPos [0] = 0;
  yPos [0] = 0;

  xPos [1] = -50;
  yPos [1] = -50;

  xPos [2] = 50;
  yPos [2] = -50;

  xPos [3] = -50;
  yPos [3] = 50;

  xPos [4] = 50;
  yPos [4] = 50;

  xPosMap[i] = map_range(xPos[i], -50, 50, 0, window.innerWidth);
  yPosMap[i] = map_range(yPos[i], -50, 50, 0, window.innerHeight);

  //console.log(xPosMap[1]);

  mesh.position.x = xPos[i];
  mesh.position.y = yPos[i];

  var randSize = Math.random() * 0.8;
  mesh.scale.x = randSize;
  mesh.scale.y = randSize;
  mesh.scale.z = randSize;

  scene.add( mesh );
  eyes.push( mesh );
}
```

This part is to make sure that the eyeballs can move with my mouse. Condition the mouse.

```javascript
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'resize', onWindowResize, false );
```

This part is the most important one i think, it is the range of five eyeballs.For each eyeball has different position, i need to find the exact range to make sure the eyeballs can look in the direction of the mouse. Use the if to condition the eye, determine the range in parentheses.

```javascript
function render() {
	console.log(mouseY)
	for (var i = 0; i < eyesNum; i++) {

		eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
		eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);

		if (mouseX<140) eyes[1].rotation.y = map_range(mouseX, 0, 140, -0.5, 0.25);
		else eyes[1].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.2, 1.14);
		if (mouseY<810) eyes[1].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[1].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);

    if (mouseX<590) eyes[2].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.25);
		else eyes[2].rotation.y = map_range(mouseX, 590, window.innerWidth, -0.25, 0.25);
		if (mouseY<810) eyes[2].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[2].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);

		if (mouseX<140) eyes[3].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[3].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
		if (mouseY<35) eyes[3].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
		else eyes[3].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

    if (mouseX<590) eyes[4].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.25);
		else eyes[4].rotation.y = map_range(mouseX, 590, window.innerWidth, -0.25, 0.2);
		if (mouseY<35) eyes[4].rotation.x = map_range(mouseY, 0, 35, -0.5, 0);
		else eyes[4].rotation.x = map_range(mouseY, 35, window.innerHeight, 0, 1.14);

	}
	renderer.render( scene, camera );
}
```

# homework2

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/8.2.png)
# Usage

First i set sprite with same color'#69f' but different position and scale. Then add them to group. I set the SpriteMaterial for the sprite.

```javascript
// add sprites
var sprite = new THREE.Sprite( new THREE.SpriteMaterial( { color: '#69f' } ) );
sprite.position.set( 6, 5, 5 );
sprite.scale.set( 2, 5, 1 );
group.add( sprite );

var sprite = new THREE.Sprite( new THREE.SpriteMaterial( { color: '#69f' } ) );
sprite.material.rotation = Math.PI / 3 * 4;
sprite.position.set( 8, - 2, 2 );
sprite.center.set( 0.5, 0 );
sprite.scale.set( 1, - 5, 1 );
group.add( sprite );

var sprite = new THREE.Sprite( new THREE.SpriteMaterial( { color: '#69f' } ) );
sprite.position.set( 0, 2, 5 );
sprite.scale.set( 10, 2, 3 );
sprite.center.set( - 0.1, 0 );
sprite.material.rotation = Math.PI / 3;
group.add( sprite );
```

And what this part does is when you move your mouse on the sprite, someting may work. Everytime you move on it, it will work. Your mousemove and mousedown to determine the function of the mouse.

```javascript
window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener( "mousemove", onDocumentMouseMove, false );
window.addEventListener( "mousedown", onDocumentMouseDown, false );
function onDocumentMouseDown( event ) {
  event.preventDefault();
  if ( selectedObject ) {
    selectedObject.material.color.set( '#69f' );
    selectedObject = null;
  }

  var intersects = getIntersects( event.layerX, event.layerY );
  if ( intersects.length > 0 ) {
    var res = intersects.filter( function ( res ) {
      return res && res.object;
    } )[ 0 ];
    if ( res && res.object ) {
      selectedObject = res.object;
      console.log(selectedObject.scale);
    }
  }
}
```

This part is about the color Setting, i set     'selectedObject.material.color.setHex( Math.random() * 0xFFFFFF );'.
That means each time you move your mouse on the sprite, a random color will appear

```javascript
function onDocumentMouseMove( event ) {
  event.preventDefault();
  if ( selectedObject ) {
    //selectedObject.material.color.set( '#69f' );
    selectedObject = null;
  }


  var intersects = getIntersects( event.layerX, event.layerY );
  if ( intersects.length > 0 ) {
    var res = intersects.filter( function ( res ) {
      return res && res.object;
    } )[ 0 ];
    if ( res && res.object ) {
      selectedObject = res.object;
      selectedObject.material.color.setHex( Math.random() * 0xFFFFFF );
    //console.log(selectedObject.position);
    }
  }
}
```

# homework3

![Image text](https://github.com/jack635/DAT505-GitHub/blob/master/pic/8.3.png)
# Usage

This part uses the function of loading models, first i should have a model in obj format, and the load it, at the same time i need load the mtl to make it looks better. And then use array to control their number. After that set the random scale, position,rotation for it. Finally i can add my models into the scene.

```javascript
for (var i=0; i<500; i++){

// Model/material loading!
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("Blocks.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("rock.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 2;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*700-400, Math.random()*700-400, Math.random()*700-400);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh); //Add to the array so that we can access for raycasting
    });
  });
}
```

This part is mostly the function of mouse, how my mouse can work. Objects are controlled by rays.

```javascript
var raycaster, renderer;
raycaster = new THREE.Raycaster();

renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

//stats = new Stats();
//container.appendChild( stats.dom );
document.addEventListener( 'mousedown', onDocumentMouseDown, false );
window.addEventListener( 'resize', onWindowResize, false );
```

This part is to emit rays to objects with the mouse and then the rays coming back. And set the random color. Every time you move your mouse on the models, they will become the different colors.

```javascript
function render() {
  //Auto rotate camera
  theta += 0.1;
  camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();

  //Find intersections
  raycaster.setFromCamera( mouse, camera );
  //var intersects = raycaster.intersectObjects( scene.children );

  var intersects = raycaster.intersectObjects( objects, true );

  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      INTERSECTED = intersects[ 0 ].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex( Math.random()*0xffffff);
    }
  } else {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = null;
  }
  renderer.render( scene, camera );
}
```
