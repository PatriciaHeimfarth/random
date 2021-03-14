import * as THREE from "../node_modules/three/build/three.module.js"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
const size = 100;
const divisions = 100;

const gridHelper = new THREE.GridHelper(size, divisions);

const cube = new THREE.Mesh(geometry, material);

cube.add(gridHelper);
scene.add(cube);

cube.rotation.x += 0.6;
cube.rotation.y += 0.6;
const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
cube.add(line);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();