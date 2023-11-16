// Crear una escena
var scene = new THREE.Scene();

// Crear una cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear un renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear una geometría
var geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear un material
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// Crear un cubo
var cube = new THREE.Mesh(geometry, material);

// Añadir el cubo a la escena
scene.add(cube);

// Crear una función de animación
function animate() {
    requestAnimationFrame(animate);

    // Rotar el cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Renderizar la escena
    renderer.render(scene, camera);
}

// Llamar a la función de animación
animate();
