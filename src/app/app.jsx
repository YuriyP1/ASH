import Background from "./components/background/Background";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

export default function App () {

    return (
        <div className="app-container">
           <Header />
           <Banner />
           <Menu   />
           <Background />
        </div>
    )
}