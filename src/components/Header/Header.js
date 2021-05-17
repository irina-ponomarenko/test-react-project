import React from "react";

import "./header.css";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import SocialBlock from "../../SocialBlock/SocialBlock";

const Header = () => {
    return(
        <header className="header">
            <Logo/>
            <Menu/>
            <SocialBlock/>
        </header>
    );
};

export default Header;