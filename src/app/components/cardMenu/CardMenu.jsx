import { useDispatch } from 'react-redux'
import './style.scss'

const CardMenu = ({ image, title, price, description, weight, amount, id }) =>{

    const position = {
        title,
        amount,
        weight,
        price,
        image,
        id
    }

    const dispatch = useDispatch()

    const addPosition = (position) => {
        dispatch({ type: 'ADD_POSITION', position: position })
    }

    return(
        <div className="cardMenu" key={id}>
            <div className="cardMenu-imageWrap">
                <img src={image} alt="" />
            </div>
            <div className="cardMenu-content">
                <div className="cardMenu-titleAndDescription">
                    <div className="cardMenu-titleAndDescription-title">
                        {title}
                    </div> 
                    <div className="cardMenu-titleAndDescription-description">
                        {description}
                    </div> 
                </div>
                <div className="cardMenu-props-container">
                    <div className="cardMenu-props-container__weight">
                        {weight} <span>грм</span>
                    </div>
                    <div className="cardMenu-props-container__amount">
                        {amount} <span>шт</span>
                    </div>
                </div>
                <div className="cardMenu-btn" onClick={()=>{addPosition(position)}}>
                    У КОШИК
                </div>
            </div>
        </div>
    )
}

export default CardMenu