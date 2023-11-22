import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
export const threeBag = (id: string) => {
	const canvasElement = document.getElementById(id) as HTMLElement
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
	const scene = new THREE.Scene()
	const camera = new THREE.PerspectiveCamera(
		45,
		canvasElement.clientWidth / canvasElement.clientHeight,
		0.1,
		1000
	)
	renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight)
	canvasElement.appendChild(renderer.domElement)

	const ambientLight = new THREE.AmbientLight(0xffffff)
	ambientLight.position.set(0, 0, 0)
	scene.add(ambientLight)
	const directionalLight = new THREE.DirectionalLight(0xffffff, 4)
	directionalLight.position.set(0, 15, 10)
	scene.add(directionalLight)
	camera.position.set(0, 0, 7)

	const gltfLoader = new GLTFLoader()
	let car: THREE.Group<THREE.Object3DEventMap>
	gltfLoader.load('/3D/meshok.gltf', gltf => {
		const model = gltf.scene
		model.position.set(0, -2.5, 0)
		scene.add(model)
		car = model
	})
	const controls = new OrbitControls(camera, renderer.domElement)
	controls.panSpeed = 2
	controls.maxDistance = 7
	controls.minDistance = 7
	const animate = () => {
		controls.update()
		if (car) car.rotation.y += 0.01
		renderer.render(scene, camera)
	}
	renderer.setAnimationLoop(animate)
}
