import Background from "./components/background/Background";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";

export default function App () {

    return (
        <div className="app-container">
           <Header />
           <Banner />
           <Background />
        </div>
    )
}