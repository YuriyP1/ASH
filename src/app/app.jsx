import { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import AsideBar from "./components/asideBar/App";
import Background from "./components/background/Background";
import Header from "./components/header/Header";
import MenuPage from "./pages/menu/MenuPage";
import OrderPage from "./pages/order/OrderPage";

export default function App () {

    const [isAsideBar, setAsideBar] = useState(false)

    const createBar = () =>{
        isAsideBar === true ? setAsideBar(false) : setAsideBar(true)
    }

    return (
        <div className="app-container">
            <Header asideBar={createBar}/>
            { isAsideBar === true && <AsideBar createBar={setAsideBar}/>}
            <Routes>
                <Route path='' element={ <MenuPage />}></Route>
                <Route path='order' element={ <OrderPage />}></Route>
            </Routes>
            <Background />
        </div>
    )
}