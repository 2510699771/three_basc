import * as THREE from 'three'


// console.log(THREE,'THREE')

// 1.创建场景
const scene = new THREE.Scene()


//  2.创建相机(透视相机)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)


// 设置相机位置
camera.position.set(0, 0, 10)

// 加入场景
scene.add(camera)

// 创建几何体
// 添加物体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMeshBasicMaterial);
// 将几何体添加到场景
scene.add(cube)



// 初始化渲染器
const render = new THREE.WebGLRenderer()
// 设置渲染尺寸大小
render.setSize(window.innerWidth, window.innerHeight)

// 将webgl渲染的canvas内容添加到body上
document.body.appendChild(render.domElement)


// 使用渲染器 通过相机 将场景渲染进来

render.render(scene, camera)