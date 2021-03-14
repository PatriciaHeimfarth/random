import * as THREE from "../node_modules/three/build/three.module.js"

const scene = new THREE.Scene();

const planeWidth = 5;
const renderer = new THREE.WebGLRenderer();
let plane;
let cube;
let camera;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const animate = function () {
    requestAnimationFrame(animate);
    cube.position.y += 0.01;
    camera.position.y += 0.01;
    renderer.render(scene, camera);
};

const initCube = function () {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
    cube = new THREE.Mesh(geometry, material);
    cube.rotation.x += 0.6;
    plane.add(cube);
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
    cube.add(line);
}

const initPlane = function () {
    const planeGeometry = new THREE.PlaneGeometry(planeWidth, 200, 32);
    const geoMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
    plane = new THREE.Mesh(planeGeometry, geoMaterial);

    scene.add(plane);
}

const initCamera = function () {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.rotation.x = 90 * Math.PI / 180
    camera.lookAt(scene.position)
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    let keyCode = event.which;
    const xPos = 0.1;
    if (keyCode == 37 && cube.position.x > -planeWidth / 2) { //left arrow
        cube.position.x -= xPos;
    } else if (keyCode == 39 && cube.position.x < planeWidth / 2) { //right arrow
        cube.position.x += xPos;
    }
};
initPlane();
initCube();
initCamera();



const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);




animate();