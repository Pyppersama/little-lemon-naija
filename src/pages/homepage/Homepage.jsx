import HeroImg from '../../assets/food/foodHome.png'
import './homepage.css'
import {MENU} from '../../Menu'
import { OrderMenu } from './OrderMenu'
import Food6 from '../../assets/food/food6.jpg'
import Contact from '../../assets/food/contact-jpeg.jpg'
import { InstagramLogo } from "phosphor-react";
import { FacebookLogo } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";

export const Homepage = () => {
    const contactImg = {
        backgroundImage: `url(${Contact})`,
        backgroundSize: 'cover',
        color: 'white',
        backgroundRepeat : 'no-repeat',
    };

    return (
        <div className='homepage'>
            <div className="hero">
                <div className="hero-words">
                    <h1>
                        Little Lemon
                    </h1>
                    <h2>
                        Nigeria
                    </h2>
                    <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloremque dolorum, aliquam ratione nulla dolor alias nam unde illo inventore deserunt assumenda id perferendis dolore, ducimus aut mollitia reprehenderit placeat repudiandae adipisci facere! Nostrum cumque ipsa odit tempora quia, illo officiis beatae vitae accusamus quidem qui, doloremque harum fuga alias?
                    </p>
                    <button className='primary-button hero-btn'> 
                        Reserve a Table
                    </button>
                </div>
                <div className="hero-img">
                    <img src={HeroImg} alt="Little-lemon plate of food" />
                </div>
            </div>

            <div className="order">
                <h3>ORDER FOR DELIVERY</h3>
                <ul>
                    <li>Lunch</li>
                    <li>Mains</li>
                    <li>Dessert</li>
                    <li>Specials</li>
                    <li>Appetizer</li>
                </ul>
            </div>

            <div className="order-menus">
                {MENU.map((order) =>(       //we are maping over the MENU array of food items
                    <OrderMenu data={order}/>          //while using the OrderMenu component
                ))}
            </div>

            <div className="about-us">
                <h2>ABOUT US</h2>
                <div className="about-description">
                    <div className="about-images">
                    <img src={Food6} alt="little-lemon-about-us-image" />
                    </div>
                    <div className="about-words">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.   
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.   
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.   
                        </p>
                    </div>
                </div>
            </div>

            <div className="contact-us"
                style={contactImg}
            >
                <div className="contact-us-back">
                    <h2>CONTACT US</h2>
                    <div className="div-wrapper">
                        <div className="contact-div">
                            <div className="contact-form">
                                <form action="">
                                    <input type="text" name="" id="" placeholder='Full Name'/>
                                    <input type="email" placeholder='Email'/>
                                    <input type="text" placeholder='Message'/>
                                    <button type="submit" className='primary-button'>Contact Us</button>
                                </form>
                            </div>
                            <div className="contact-details">
                                <div className="contact-details-one">
                                    <h2>Contact Us</h2>
                                    <p>info@littlelemon.ng</p>
                                </div>
                                <div className="contact-details-two">
                                    <h2>Based In</h2>
                                    <p>Lagos, <br /> Nigeria</p>
                                </div>
                                <div className="contact-details-icons">
                                    <FacebookLogo size={38} className='icons'/>
                                    <InstagramLogo size={38} className='icons'/>
                                    <TwitterLogo size={38} className='icons'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}