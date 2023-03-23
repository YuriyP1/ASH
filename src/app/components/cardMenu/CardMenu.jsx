import './style.scss'

const CardMenu = ({ image, title, description, weight, amount, index }) =>{
    return(
        <div className="cardMenu" key={index}>
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
                <div className="cardMenu-btn">
                    У КОШИК
                </div>
            </div>
        </div>
    )
}

export default CardMenu