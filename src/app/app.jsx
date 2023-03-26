import { useState } from "react";
import AsideBar from "./components/asideBar/App";
import Background from "./components/background/Background";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

export default function App () {

    const [isAsideBar, setAsideBar] = useState(false)
    const createBar = () =>{
        isAsideBar === true ? setAsideBar(false) : setAsideBar(true)
    }

    return (
        <div className="app-container">
           <Header asideBar={createBar}/>
            { isAsideBar === true && <AsideBar createBar={setAsideBar}/>}
           <Banner />
           <Menu   />
           <Background />
        </div>
    )
}