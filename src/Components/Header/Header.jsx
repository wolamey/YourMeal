import ReactDOM from 'react-dom'
import React from 'react'
import "./Header.scss"
import logo from "../../../public/MainLogo.png"
import headerBurger from "../../../public/HeaderBurger.png"
import menu1 from "../../../public/menu1.png"
import { NavLink } from "react-router-dom"
import menu2 from "../../../public/Combo.png"
import menu3 from "../../../public/free-icon-hotdog-sandwich-2362313.png"
import menu4 from "../../../public/free-icon-onion-2362361.png"
import menu5 from "../../../public/shawarma.png"
import menu6 from "../../../public/pizza.png"
import menu7 from "../../../public/wok.png"
import menu8 from "../../../public/deserts.png"
import menu9 from "../../../public/sauses.png"
export default function Header({setPageName, localPage}) {

function setPage(pageName){
    setPageName(pageName);
//     localPage = pageName;
// console.log(localPage);
localStorage.pageName = pageName
}

    return (
        <div className="header_body">
            <div className="header_top_part">
                <div className="logo_part">
                    <p>YourMeal</p>
                    <img src={logo} alt="" />
                </div>

                <div className="offer">
                    <img src={headerBurger} alt="" />
                    <div className="offer_left">
                        <p className="whiteOffer">Only </p>
                        <p className="orangeOffer">the juiciest burgers!</p>
                        <p className="freeDelivery">Free delivery from 599₽</p>
                    </div>
                </div>

            </div>


<div  className="bottom_tabs_part">
<nav className="header_navlinks">
<NavLink  onClick={() => setPage('Burgers')}   to='/'> <button className="menu_link"><img src={menu1} alt="" />Burgers</button></NavLink>
<NavLink  onClick={() => setPage('Snacks')}    to='/Snacks'> <button className="menu_link"><img src={menu4} alt="" />Snacks</button></NavLink>
<NavLink   onClick={() => setPage('Hot dogs')}  to='/HotDogs'> <button className="menu_link"><img src={menu3} alt="" />Hot dogs</button></NavLink>
<NavLink   onClick={() => setPage('Combo')}  to='/Combo'> <button className="menu_link"><img src={menu2} alt="" />Combo</button></NavLink>
<NavLink   onClick={() => setPage('Shawarma')}  to='/Shawarma'> <button className="menu_link"><img src={menu5} alt="" />Shawarma</button></NavLink>
<NavLink   onClick={() => setPage('Pizza')}  to='/Pizza'> <button className="menu_link"><img src={menu6} alt="" />Pizza</button></NavLink>
<NavLink   onClick={() => setPage('Wok')}  to='/Wok'> <button className="menu_link"><img src={menu7} alt="" />Wok</button></NavLink>
<NavLink   onClick={() => setPage('Desserts')}  to='/Desserts'> <button className="menu_link"><img src={menu8} alt="" />Desserts</button></NavLink>
<NavLink   onClick={() => setPage('Sauces')}  to='/Sauces'> <button className="menu_link"><img src={menu9} alt="" />Sauces</button></NavLink>
</nav>
</div>


        </div>
    )
}
