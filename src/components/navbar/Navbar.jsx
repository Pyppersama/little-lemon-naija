import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import  Logo from '../../assets/food/logo.png'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='img'>
                <img src= {Logo} alt="little-lemon-logo" />
            </div>
            <div className='links'>
                <Link to='/'><p>Home</p></Link>
                <Link ><p>About Us</p></Link>
                <Link to='/Menu'><p>Menu</p></Link>
                <Link to='/Reservation'><p>Reservation</p></Link>
                
            </div>
            <div className='links-right'>
                <Link to='/Login' ><button className='primary-button'>Login</button></Link>
                <Link to='/Cart'><ShoppingCart size={32} /></Link>
            </div>
        </div>
    )
}