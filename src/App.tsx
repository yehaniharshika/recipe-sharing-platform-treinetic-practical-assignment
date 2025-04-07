import './App.css'
import NavigationBar from "./components/NavigationBar/NavigationBar.tsx";
import {useState} from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup.tsx";
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home.tsx';

function App() {

    const [showLogin,setShowLogin] = useState(false);

    return (
        <>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
            <div className="app">
                <NavigationBar setShowLogin={setShowLogin}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<PlaceOrder />} />
                    <Route path="/verify" element={<Verify />} />
                    <Route path="/myOrders" element={<MyOrders />} /> */}
                </Routes>
            </div>
        </>
    );
}

export default App
