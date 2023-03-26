import { useSelector } from "react-redux"
import ContainerMenu from "./containerMenu/ContainerMenu"
import HeaderMenu from "./headerMenu/HeaderMenu"

import './style.scss'

const Menu = () => {

    const storeSection = useSelector(state => state.section.section)
    // const store = useSelector(state => console.log(state.store))

    return (
        <div className="menu limitWidthSecond">
            <HeaderMenu    />
            <ContainerMenu section={storeSection}/>
        </div>
    )
}

export default Menu