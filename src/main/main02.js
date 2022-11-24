import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//控制3D物体移动 

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

// 修改物体的位置
// cube.position.set(5, 0, 0)
cube.position.x = 3

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


// 创建轨道控制器

const controls = new OrbitControls(camera, render.domElement)


// 添加坐标轴辅助器

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

function rendeer() {
    cube.position.x += 0.01
    if (cube.position.x > 5) { cube.position.x = 0 }

    render.render(scene, camera);
    //  渲染下一帧的时候就会调用rendeer函数
    requestAnimationFrame(rendeer)
}

rendeer()