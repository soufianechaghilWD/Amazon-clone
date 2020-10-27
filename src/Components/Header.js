import React from 'react'
import '../Style/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Header() {
    return (
        <div className="header">
            <div className="headerpc">
                <div className="header1">
                    <MenuIcon className="header__menu"/>
                    <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" className="header__logo" />
                    <div className="header__search">
                        <select className="header__searchSelect">
                            <option value="volvo">All</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <input type="text" className="header__searchInput" />
                        <button className="header__searchButton"><SearchIcon /></button>
                    </div>
                    <div className="header__option">
                        <span>Hello, Sign in</span>
                        <p><strong>Accounts & lists</strong></p>
                    </div>
                    <div className="header__option">
                        <span>Returns</span>
                        <p><strong>& Orders</strong></p>
                    </div>
                    <div className="header__option header__basket">
                        <p><ShoppingBasketIcon /><span> 0</span></p>
                    </div>
                </div>
                <div className="header2">
                    <div className="header2__section1">
                        <div className="header2__section1__part1">
                            <LocationOnIcon className="header2__location" />
                            <div className="header2__deliver">
                                <small>Deliver to </small>
                                <p>Morocco</p>
                            </div>
                        </div>
                        <p className="header2__headLine">Today's Deals</p>
                        <p className="header2__headLine">Customer Service</p>
                        <p className="header2__headLine">Gift Cards</p>
                        <p className="header2__headLine">Registry</p>
                        <p className="header2__headLine">Sell</p>
                    </div>     
                    <p className="header2__brand">Amazon's Response to COVID-19</p>              
                </div>
            </div>
            <div className="headerPhone">
                <div className="headerP__row1">
                    <div className="headerP__row1__part1">
                        <MenuIcon className="headerP__menu"/>
                        <img className="headerP__logo" alt="" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                    </div>
                    <div className="headerP__row1__part1">
                        <p className="headerP__signin">Sign In</p>
                        <ShoppingBasketIcon className="headerP__basket"/>
                        <span className="headerP__total">0</span>
                    </div>
                </div>
                <div className="headerP__row2">
                    <div className="headerP__wrap">
                        <input type="text" placeholder="Search Amazon" className="headerP__input"/>
                        <button className="headerP__button"><SearchIcon /></button>
                    </div>
                </div>
                <div className="headerP__row3">
                    <p>Whole Foods</p>
                    <p>Lists</p>
                    <p>Deals</p>
                    <p>Videos</p>
                    <p>Music</p>
                    <p>Best Sellers</p>
                    <p>New Releases</p>
                    <p>AmazonBasics</p>
                    <p>Gift Cards</p>
                    <p>Home</p>
                    <p>Health & HouseHold</p>
                    <p>Books</p>
                    <p>Pc</p>
                </div>
            </div>
        </div>
    )
}

export default Header
