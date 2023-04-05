import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Icons from '../../../assets/icons/Icons'
import AsideBarCard from './asideBarCard/AsideBarCard'
import { Link } from 'react-router-dom'
import './style.scss'

const AsideBar = ({ createBar }) =>{

    const store = useSelector(state => state)
    // console
    return(
        <div className='asideBar'>
            <div className="asideBar-head">
                <h1 className="center">КОШИК</h1>
                <div className="asideBar-head__basket center"
                onClick={createBar}
                >
                    <Icons icon='basket' style={{position:'absolute'}} onClick={createBar}/>
                    <div className="asideBar-head__basket__count">
                        {store.store.count}
                    </div>
                </div>
            </div>
            <div className="asideBar-content">
                {
                    store.store.store.map((item, _index)=>{
                        return <AsideBarCard
                            key={item.id + Math.random()}
                            image={item.image}
                            title={item.title}
                            weight={item.weight}
                            price={item.price}
                            amount={item.amount}
                            id={item.id}
                        />
                    })
                }
            </div>
            <div className="asideBar-order center">
                <div className="asideBar-order__sum">
                    СУМА: {store.store.sum}
                </div>
                <Link to='/order' className="asideBar-order__buy">
                    ЗАМОВИТИ
                </Link>
            </div>
        </div>
    )
}

export default AsideBar