import React from 'react'
import './header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
           
            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
            
            
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

           <Link to='/'>
            <img
                    className="header__icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcMQRhnErvWZBQu_Pnmn0XSDG0F3voGER6A&usqp=CAU"
                    alt=""
                />
                </Link>
        </div>
    )
}

export default Header
