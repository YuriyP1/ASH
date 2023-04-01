import { useState } from "react"
import { useSelector } from "react-redux"
import ContainerMenu from "./containerMenu/ContainerMenu"
import FullCard from "./fullCard/FullCard"

import HeaderMenu from "./headerMenu/HeaderMenu"

import './style.scss'

const Menu = () => {

    const storeSection = useSelector(state => state.section.section)
    // const store = useSelector(state => console.log(state.store))

    const [cardId, setFullCard] = useState(null)
    const [isPay, setPay] = useState(false)

    const showFullCard = (cardId) =>{
        setFullCard(cardId)
    }
    

    return (
        <div className="menu limitWidthSecond">
            <HeaderMenu disposeFullCard={showFullCard}/>
            {
                cardId
                ? <FullCard cardId={cardId}/>
                : <ContainerMenu section={storeSection} setFullCard={showFullCard}/>
            }
        </div>
    )
}

export default Menu