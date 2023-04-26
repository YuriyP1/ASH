import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import menu from '../../../../assets/menu/menu.json'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import useWindowSize from '../../../hook/resizeWindow';
import FilterClass from '../Filter';

// filter by searching
const filterMenu = (searchText, listOfPositions) => {

    return listOfPositions.filter(({ title }) =>
      title.toLowerCase().includes(searchText.toLowerCase())
    )
}

const HeaderMenu = ({disposeFullCard}) => {

    const window = useWindowSize()
    const input = useRef()

    const [menuList, setMenuList] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch()
    const storeList = useSelector(store => store.list)

    const updateList = (searchTerm, section) => {
        if(searchTerm != ''){
            dispatch({ type: 'SET_SEARCH', searchTerm: searchTerm })
        } else {
            dispatch({ type: 'SET_SECTION', section: section })
        }
    }

    useEffect(()=>{
        const Debounce = setTimeout(() => {
            updateList(searchTerm)
        }, 150);
    
        return () => clearTimeout(Debounce);
    },[searchTerm])

    const items = [
        {
            title: "ПІЦА"
        },
        {
            title: "СУШІ"
        },
        {
            title: "РОЛИ"
        },
        {
            title: "БУРГЕРИ"
        },
    ]
    const store = useSelector(state => state)

    const [active, setActive] = useState(items[0].title)

    // useLayoutEffect(()=>{
    //     // setActive(store.section.section)
    // },[storeList.section])

    const setSection = (section) => {
        disposeFullCard(null)
        switch (section){
            case 'ПІЦА': dispatch({ type: 'SET_SECTION', section: 'pizza' })
                break
            case 'РОЛИ': dispatch({ type: 'SET_SECTION', section: 'roll' })
                break
            case 'СУШІ': dispatch({ type: 'SET_SECTION', section: 'sushi' })
                break
            case 'БУРГЕРИ': dispatch({ type: 'SET_SECTION', section: 'burgers' })
                break
        }
        setActive(section)
        console.log(section)
    }

    return (<>
        {
            window.width > 1180 ?
            <div className="headerMenu">
            {
                window.width > 1180 
                ? <div className="headerMenu-search center">
                <input
                    className="ecosystem-filter-change__input"
                    ref={input}
                    onChange={e =>{setSearchTerm(e.target.value)}}
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
                    centeredSlides={ window.width < 1180 && 'center'}
                    // centeredSlides={ 'default'}
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
        :
        <div className="headerMenuMob">
            <div className="headerMenuMob-itemsMob">
                {/* {store.section.section} */}
            {
                items.map((item, _index)=>{
                    return <>
                        <div className={`headerMenuMob-itemsMob__position center ${active === item.title && 'active'}`}
                            onClick={()=>{setSection(item.title)}}
                        >
                            {item.title}
                        </div>
                    </>
                })
            }
            </div> 
            <div className='mobile-title'>
                <div className='mobile-title__line'></div>
                    <p>{active}</p>
                <div className='mobile-title__line'></div>
            </div>
        </div>
      
        }
    </>
    )
}


export default HeaderMenu