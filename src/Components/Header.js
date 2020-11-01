import React, { useState } from 'react'
import '../Style/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HomeIcon from '@material-ui/icons/Home';
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';


function getModalStyle() {
    const top = 0;
    const left = 0 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    paper: {
      position: 'absolute',
      backgroundColor: "rgba(0,0,0,0)",
      width: 407,
      overflow: 'hidden',
      height: "100%",
      display: 'flex',
      outline: 'none',
    },
    small: {
      width: theme.spacing(3.1),
      height: theme.spacing(3.1),
      marginRight: 10,
      color: '#232f3e',
      backgroundColor: 'white',
      marginTop: 4,
    },

  }));
  function getModalStyleP() {
    const top = 0;
    const left = 0 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStylesP = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    paper: {
      position: 'absolute',
      backgroundColor: "rgba(0,0,0,0)",
      width: 350,
      overflow: 'hidden',
      height: "100%",
      display: 'flex',
      outline: 'none',
    },
    small: {
      width: theme.spacing(3.1),
      height: theme.spacing(3.1),
      marginRight: 10,
      color: '#232f3e',
      backgroundColor: 'white',
      marginTop: 4,
    },

  }));

function Header() {

    const [{ basket }, dispatch] = useStateValue();
    const classes = useStyles();
    const classesP = useStylesP();
    const [modalStyle] = React.useState(getModalStyle);
    const [modalStyleP] = React.useState(getModalStyleP);
    const [open, setOpen] = useState(false);
    const [openP, setOpenP] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleOpenP = () => {
        setOpenP(true);
      };
    
      const handleCloseP = () => {
        setOpenP(false);
      };
    return (
        <div className="header">
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        
      >
          <Slide direction="right" in={open} mountOnEnter unmountOnExit>
          <div style={modalStyle} className={classes.paper}>
            <div className="headerPc__modalleft">
              <div className="headerPc__modalTitle">
                <Avatar src="/broken-image.jpg" className={classes.small}/>
                <h3 id="simple-modal-title" >Hello, Sign in</h3>
              </div>
            
              <div className="headerPc__modalBody">
                  <div className="headerPc__modalOption">
                      <h4>Explore Amazon</h4>
                      <p>Deals & Savings</p>
                  </div>
                  <hr />
                  <div className="headerPc__modalOption">
                      <h4>Digital Content & Devices</h4>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Amazon Music</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Kindle E-readers & Books</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Kindle E-readers & Books</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Appstore for Android</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                  </div>
                  <hr />
                  <div className="headerPc__modalOption">
                      <h4>Shop By Department</h4>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Electronic</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Computers</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Smart Home</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Arts & Carts</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div>
                        <p>See All</p>
                      </div>
                  </div>
                  <hr />
                  <div className="headerPc__modalOption">
                      <h4>Programs & Features</h4>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Gift Cards</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div>
                        <p>#FoundItOnAmazon</p>
                      </div>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Amazon Live</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div className="HeaderPc__modalOptionOption">
                        <p>International Shopping</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                      <div>
                        <p>See All</p>
                      </div>
                      <div className="HeaderPc__modalOptionOption">
                        <p>Full Store Directory</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                      </div>
                  </div>
                  <hr />
                  <div className="headerPc__modalOption">
                      <h4>Help & Settings</h4>
                      <div>
                        <p>Your Account</p>
                      </div>
                      <div>
                        <p>English</p>
                      </div>
                      <div>
                        <p>United States</p>
                      </div>
                      <div>
                        <p>Help</p>
                      </div>
                      <div>
                        <p>Sign In</p>
                      </div>
                      <br />
                      <br />
                      <br />
                  </div>
                  </div>
                </div>
                <div className="headerPc__right">
                  <a onClick={(e) => setOpen(false)}><ClearIcon className="headerPc__rightNot"/></a>
                </div>
          </div>
          </Slide>
      </Modal>
      <Modal
        open={openP}
        onClose={handleCloseP}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        
      >
          <Slide direction="right" in={openP} mountOnEnter unmountOnExit>
          <div style={modalStyleP} className={classesP.paper}>
            <div className="headerPc__modalleft">
                <div className="headerP__modalTitle">
                    <HomeIcon className="headerP__home"/>
                    <p>Amazon</p>
                </div>
                <hr />
                <div className="headerPc__modalBody">
                    <h4 className="headerP__modalPP">Explore</h4>
                    <p className="headerP__modalPC headerP__op">TOP DEPARTEMENTS</p>
                    <p className="headerP__modalPC">Home</p>
                    <p className="headerP__modalPC">Health & Household</p>
                    <p className="headerP__modalPC">Books</p>
                    <p className="headerP__modalPC">Pc</p>
                    <div className="HeaderPc__modalOptionOption">
                        <p className="headerP__modalPO">See All Departements</p>
                        <ArrowForwardIosIcon className="headerPc__arr"/>
                    </div>
                </div>
            </div>
            <div className="headerP__right">
                <a onClick={(e) => setOpenP(false)}><ClearIcon className="headerPc__rightNot"/></a>
            </div>
          </div>
          </Slide>
      </Modal>
            <div className="headerpc">
                <div className="header1">
                    <a href="#" onClick={handleOpen} className="header__a"><MenuIcon className="header__menu"/></a>
                    <Link to='/'>
                      <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" className="header__logo" />
                    </Link>
                    <div className="header__search">
                        <select className="header__searchSelect">
                            <option value="" selected disabled hidden >All</option>
                            <option value="saab">All Departements</option>
                            <option value="mercedes">Arts </option>
                            <option value="audi">Automative</option>
                            <option value="audi2">Baby</option>
                            <option value="aud3">Beauty</option>
                            <option value="audi4">Books</option>
                            <option value="aud5">Camera</option>
                            <option value="audi6">Clothing</option>
                            <option value="aud7">Consumer</option>
                            <option value="audi7">Grocery</option>
                            <option value="audi8">Health</option>
                            <option value="aud8">Home</option>
                            <option value="aud9">Industrial</option>
                            <option value="audi9">Kindle</option>
                            <option value="audi10">Luggage</option>
                            <option value="audi11">Musical</option>
                            <option value="audi12">Office</option>
                            <option value="audi13">Outdoors</option>
                            <option value="audi14">Personal</option>
                            <option value="aud12">Pet</option>
                            <option value="aud11">Shoes</option>
                            <option value="aud16">Software</option>
                            <option value="aud141">Sports</option>
                            <option value="audi123">Tools</option>
                            <option value="audi1234">Toys</option>
                            <option value="audi12345">Video</option>
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
                    <Link to="/checkout" className="test">
                      <div className="header__option header__basket">
                          <p><ShoppingBasketIcon /><span> {basket?.length}</span></p>
                      </div>
                    </Link>
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
                        <a href="#" className="headerP__a" onClick={handleOpenP}><MenuIcon className="headerP__menu"/></a>
                        <Link to="/">
                          <img className="headerP__logo" alt="" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                        </Link>
                    </div>
                    <div className="headerP__row1__part1">
                        <p className="headerP__signin">Sign In</p>
                        <PersonIcon className="headerP__person"/>
                        <Link to="/checkout" className="test">
                          <ShoppingBasketIcon className="headerP__basket"/>
                          <span className="headerP__total">{basket?.length}</span>
                        </Link>
                        
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
                <div className="headerP__row4">
                    <LocationOnIcon className="headerP__location"/>
                    <p>Deliver to Morocco</p>
                </div>
            </div>
        </div>
    )
}

export default Header
