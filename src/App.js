import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from '../src/components/navbar/Navbar'
import { Footer } from "./components/footer/Footer";
import { Homepage } from "./pages/homepage/Homepage";
import { Cart } from "./pages/cart/Cart";
import { Menu } from "./pages/menu/Menu";
import { Reservation } from "./forms/Reservation";
import { Login } from "./forms/Login";

function App() {

  return (
    <div className="App">
     <Router>
      <Navbar/>

      <Routes>
        <Route path = '/' element={<Homepage />} />
        <Route path = '/Menu' element={<Menu />} />
        <Route path = '/Reservation' element={<Reservation />} />
        <Route path = '/Login' element={<Login />} />
        <Route path = '/Cart' element={<Cart />} />
      </Routes>

      <Footer/>
    </Router> 
    </div>
  );
}

export default App;
