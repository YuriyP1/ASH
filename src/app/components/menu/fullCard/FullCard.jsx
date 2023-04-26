import { useRef, useState } from 'react'
import menu from '../../../../assets/menu/menu.json'

import './style.scss'
import { useDispatch } from 'react-redux'

const FullCard = ({cardId}) => {

    let card 

    menu.menu.map((position, _index)=>{
        if(position.id === cardId){
            card = position
        }
    })

    const ingredients = [
        {
            title: 'лосось'
        },
        {
            title: 'норі'
        },
        {
            title: 'рис'
        },
        {
            title: 'норі'
        },
        {
            title: 'рис'
        },
        {
            title: 'рис'
        },
        {
            title: 'ікра тобіко'
        }
    ]
    const dispatch = useDispatch()

    const addPosition = (position) => {
        dispatch({ type: 'ADD_POSITION', position: position })
    }

    console.log(card)
    return (
        <div className="fullCard limitWidthSecond">
            <div className="fullCard-container">
                <div className='fullCard-imageWrap'>
                    <img src={card.image} alt="" />
                </div>
                <div className='fullCard-content'>
                    <div className="fullCard-content__title">
                        <h1>{card.title}</h1>
                    </div>
                    <div className="fullCard-content__description">
                        <p>{card.description}</p>
                    </div>
                    <div className='fullCard-content-btnAndPrice'>
                        <div className="fullCard-content__btn"
                            onClick={()=>{addPosition(card)}}
                        >
                            У КОШИК
                        </div>
                        <p>{card.price} <span>&nbsp;грн</span></p>
                    </div>
                </div>
            </div>
            <div className="fullCard-ingredients">
                {/* <p className='center'>ІНГРЕДІЄНТИ</p> */}
                {
                    ingredients.map((item, _index)=>(
                        <div className="ingredient">
                            <p>
                                {item.title}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FullCard