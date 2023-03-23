import { Canvas, useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '@react-three/drei'
import './style.scss'
// extend({ OrbitControls })
const Banner = () =>{
    // const { camera, gl } = useThree()
    const model = useLoader(GLTFLoader, 'models/sushi/scene.gltf')
    console.log(model)
    return(
        <div className="banner limitWidthSecond">
            <div className="banner-content">
                <div style={{display: 'flex'}}>СУШІ В &nbsp;<div className='FB9950'>ASH</div></div>
                ДОСТАВЩИК <br/>
                ВАШ
                <div className='banner-content__btn'>
                    ЗІБРАТИ КОШИК
                </div>
            </div>
            <div className="banner-visual" id='canvas__root'>
                <img className="banner-visual__image" src='images/banner/banner-image.png'/>
                {/* <Canvas >
                <OrbitControls />
                <directionalLight />
                <primitive object={ model.scene } />
                </Canvas> */}
            </div>
        </div>
    )
}

export default Banner