import * as THREE from "../node_modules/three/build/three.module.js"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff69b4 });

var xPos = 0.1;




const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;

    if (keyCode == 37) { //left arrow
        cube.position.x -= xPos;
    } else if (keyCode == 39) { //right arrow
        cube.position.x += xPos;
    }
};

cube.rotation.x += 0.6;

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
cube.add(line);

camera.position.z = 5;
camera.rotation.x = 90 * Math.PI / 180
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const animate = function () {
    requestAnimationFrame(animate);
    cube.position.z -= 0.1;
    camera.position.z -= 0.1;
    renderer.render(scene, camera);
};

animate();