import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Icons from '../../../assets/icons/Icons'
import asideBar from '../asideBar'
import AsideBar from '../asideBar/App'
import './style.scss'

const Header = ({ asideBar }) =>{

    const header = useRef()
    const [style, setStyle] = useState(false)
    const count = useSelector(state => state.store.count)
  
    useEffect(()=>{
        window.addEventListener('scroll', function(e) {
            window.scrollY <= 30 ? setStyle(false) :  setStyle(true)
          });
    },[])

    return(
        <div className={`header limitWidthHeader fix ${style ? 'bg' : null}`}
            ref={header}    
        >
            <div className="header-content">
                <div className="header-content-logo center">
                    ASH
                </div>
                <nav className='header-content-nav'>
                    <ul>
                        <li>ДОСТАВКА</li>
                        <li>О НАС</li>
                        <li>О НАС</li>
                    </ul>
                </nav>
                <div className="header-content-basket center"
                    onClick={asideBar}
                >
                    <Icons icon='basket' style={{position: 'absolute'}}/>
                    <div className="header-content-basket__count">
                        {count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header