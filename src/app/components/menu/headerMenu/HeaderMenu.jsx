import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import useWindowSize from '../../../hook/resizeWindow';

const HeaderMenu = ({disposeFullCard}) => {

    const window = useWindowSize()
    const input = useRef()

    const items = [
        {
            title: "ПІЦА"
        },
        {
            title: "СУШІ"
        },
        {
            title: "БУРГЕРИ"
        },
        {
            title: "ПЕРШІ СТРАВИ"
        },
        {
            title: "САЛАТИ"
        },
    ]
    const [active, setActive] = useState(items[0].title)

    const dispatch = useDispatch()

    const setSection = (section) => {
        disposeFullCard(null)
        switch (section){
            case 'ПІЦА': dispatch({ type: 'SET_SECTION', section: 'pizza' })
                break
            case 'СУШІ': dispatch({ type: 'SET_SECTION', section: 'sushi' })
                break
            case 'БУРГЕРИ': dispatch({ type: 'SET_SECTION', section: 'burgers' })
                break
        }
        setActive(section)
    }

    return (
        <div className="headerMenu">
            {
                window.width > 1180 
                ? <div className="headerMenu-search center">
                <input
                    className="ecosystem-filter-change__input"
                    ref={input}
                    // value=''
                    // onChange={e =>{setSearchTerm(e.target.value)}}
                    placeholder="Search"
                    type='text'
                />
                </div>
                :
                null
            }

            <div className="headerMenu-items">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={ window.width > 1180 ? 'center' : 'default'}
                    slidesPerView={ window.width > 1180 ? 4 : 2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                {
                    items.map((item, _index)=>{
                        return <SwiperSlide key={_index} className="center">
                            <div className={`headerMenu-items__position center ${active === item.title && 'active'}`}
                                onClick={()=>{setSection(item.title)}}
                            >
                                {item.title}
                            </div>
                        </SwiperSlide>
                    })
                }
                </Swiper>
            </div>
        </div>
    )
}

export default HeaderMenu