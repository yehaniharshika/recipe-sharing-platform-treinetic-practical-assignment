
import './App.css'
import NavigationBar from "./components/NavigationBar.tsx";

function App() {

    const [showLogin,setShowLogin] =useState(false);

    return (
        <>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
            <div className="app">
                <NavigationBar setShowLogin={setShowLogin}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<PlaceOrder />} />
                    <Route path="/verify" element={<Verify />} />
                    <Route path="/myOrders" element={<MyOrders />} />
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App
