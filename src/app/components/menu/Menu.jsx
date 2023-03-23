import ContainerMenu from "./containerMenu/ContainerMenu"
import HeaderMenu from "./headerMenu/HeaderMenu"

import './style.scss'

const Menu = () => {
    return (
        <div className="menu limitWidthSecond">
            <HeaderMenu    />
            <ContainerMenu />
        </div>
    )
}

export default Menu