// Include Three.js - make sure to add the library to your project
import * as THREE from 'three';

// Step 2: Create the scene
const scene = new THREE.Scene();

// Step 3: Add a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Step 4: Add lighting
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

// Step 5: Create a 3D model (a simple cube for this example)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Step 6: Add the model to the scene
scene.add(cube);

// Step 7: Render the scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();