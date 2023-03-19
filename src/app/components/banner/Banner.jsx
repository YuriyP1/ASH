import './style.scss'

const Banner = () =>{
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
            <div className="banner-visual"></div>
        </div>
    )
}

export default Banner