// import { Canvas, useThree } from '@react-three/fiber'
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { OrbitControls } from '@react-three/drei'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './style.scss'
import './style.scss'
// extend({ OrbitControls })
const Banner = () =>{
    // const { camera, gl } = useThree()
    // const model = useLoader(GLTFLoader, 'models/sushi/scene.gltf')
    // console.log(model)
    return(
        <div className="banner limitWidthSecond">
                <Swiper
                    // spaceBetween={30}
                    // centeredSlides={ 'default'}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                    <div className="banner-content">
                        <div style={{display: 'flex'}}>СУШІ В <div className='FB9950'> ASH</div></div>
                            ДОСТАВЩИК <br/>
                            ВАШ
                            <div className='banner-content__btn'>
                                ЗІБРАТИ КОШИК
                            </div>
                        </div>
                        <div className="banner-visual" id='canvas__root'>
                            <img className="banner-visual__image" src='images/banner/banner-image.png'/>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide > */}
                    {/* <div className="banner-content">
                        <div style={{display: 'flex'}}>СУШІ В <div className='FB9950'> ASH</div></div>
                            ДОСТАВЩИК <br/>
                            ВАШ
                            <div className='banner-content__btn'>
                                ЗІБРАТИ КОШИК
                            </div>
                        </div>
                        <div className="banner-visual" id='canvas__root'>
                            <img className="banner-visual__image" src='images/banner/banner-image.png'/>
                        </div> */}
                    {/* </SwiperSlide> */}
                </Swiper>
        </div>
    )
}

export default Banner