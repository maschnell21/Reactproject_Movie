import React from 'react'
import {Link} from "react-router-dom";
import user from  "../../images/user.jpg";
import "./Header.scss";
 const Header = () => {
    return (
        <div className="header">
            <Link>
            <div className="logo">MOVIE APP</div>
            </Link>
           
            <div className="user-image">
<img src={user} alt="user"/>

            </div>
            <h1>header</h1>

        </div>
    )
}
export default Header;