function animate() {
    requestAnimationFrame(animate);

    // Podemos adicionar rotação depois, mas o foco agora é apenas renderizar
    renderer.render(scene, camera);
}

// Criando a cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Criando o renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criando o Sol
const sunGeometry = new THREE.SphereGeometry(25, 32, 16);
const sunMaterial = new THREE.MeshLambertMaterial({ color: 0xffc222 });
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
sunMesh.position.x = 0;  // Posicionando o Sol
scene.add(sunMesh);

// Criando Mercurio
const mercuryGeometry = new THREE.SphereGeometry(5, 32, 16);
const mercuryMaterial = new THREE.MeshLambertMaterial({ color: 0x7b0000 });
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercuryMesh.position.x = -35;  // Posicionando Mercurio
scene.add(mercuryMesh);

// Criando a Terra
const earthGeometry = new THREE.SphereGeometry(10, 32, 16);
const earthMaterial = new THREE.MeshLambertMaterial({ color: 0x027017 });
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
earthMesh.position.x = 40;  // Posicionando a Terra
scene.add(earthMesh);

// Criando a Lua
const moonGeometry = new THREE.SphereGeometry(1, 32, 16);
const moonMaterial = new THREE.MeshLambertMaterial({ color: 0xD3D3D3 });
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
moonMesh.position.y = 12;
moonMesh.position.x = 35;  // Posicionando a lua
scene.add(moonMesh);

// Adicionando luz à cena
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 45);
scene.add(light);

// Posicionando a câmera
camera.position.z = 85;

animate();
