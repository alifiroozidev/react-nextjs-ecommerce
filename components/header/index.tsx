import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from 'store';
//import WebAccessories from '../header/web-accessories';
import ReactDOM, { render } from "react-dom";


type HeaderType = {
  isErrorPage?: Boolean;
}


const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState)  => state.cart);
  const arrayPaths = ['/'];  

  const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if(!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return(

    <>

<div className="top-menu">

  <div id="navbar-bg">
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
  <div id="mySidenav" className="sidenav top-menu-item-container">
    <a
      href="javascript:void(0)"
      className="closebtn1 mobile-only"
      onclick="closeNav1()"
    >
      ×
    </a>
    <img className="logo desktop-only" src="/img/logo.png" />
    <a href="/">Home</a>
    <a href="/products">Products</a>
    <div className="dropdown">
      <button className="dropbtn">Categories </button>
      <div className="dropdown-content">
        <a href="#">Anime &amp; Comics</a>
        <a href="#">Sport</a>
        <a href="#">Trade</a>
        <a href="#">Books &amp; Magazines</a>
        <a href="#">Game</a>
        <a href="#">Stream</a>
        <a href="#">Education</a>
        <a href="#">Meditation</a>
      </div>
    </div>
    <a href="">Feedbacks</a>
    <a href="">Support</a>
    <form
      role="search"
      method="get"
      className="search-form desktop-only"
      action=""
    >
      <input
        type="search"
        className="search-field "
        placeholder=" Type something ..."
        defaultValue=""
        name="s"
      />
      <input type="submit" className="search-submit" defaultValue="Search" />
    </form>
  </div>
</div>
<div className="top mobile-only">
  <div id="sidemenu-btn" className="mobile-only">
    <span onclick="openNav1()">
      <img src="https://kfhgilan.org/wp-content/themes/BehboodKhaneh_wp_theme/img/app/menubtn.svg" />
    </span>
  </div>
  <div className="mobile-logo">
    <img className="logo mobile-only" src="/img/logo.png" />
  </div>
  <span id="searchModalBtn">
    <img src="https://kfhgilan.org/wp-content/themes/BehboodKhaneh_wp_theme/img/app/searchbtn.svg" />
  </span>
</div>
<div id="searchModal" className="modal" style={{ display: "none" }}>
  <div className="modal-content">
    <span className="close">×</span>
    <div className="modal-body">
      <p></p>
      <form role="search" method="get" className="search-form" action="../">
        <label>
          <span className="screen-reader-text">
            Explore in +300 digital product
          </span>
          <input
            type="search"
            className="search-field"
            placeholder="type something ..."
            defaultValue=""
            name="s"
          />
        </label>
        <input type="submit" className="search-submit" defaultValue="Go" />
      </form>
      <p />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</div>
<div className="toolbar">
  <img className="symbol" src="/img/small.logo.png" />
  <div className="flex-item-container">
    <button
      className="light-mode-button"
      aria-label="Toggle Light Mode"
      onclick={toggle_light_mode()}
    >
      <span>
        <img src="/img/icon/1.png" />
      </span>
    </button>
    <a href='/cart'><span>
      <img src="/img/icon/2.png" />
    </span> </a>
    <span>
      <img src="/img/icon/3.png" />
    </span>
    <span>
      <img src="/img/icon/4.png" />
    </span>
    <a href='/login'><span>
      <img src="/img/icon/5.png" />
    </span></a>
  </div>
</div>
</>
  )
};


export default Header;
