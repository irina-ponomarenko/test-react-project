import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import "./Menu.css";

const Menu = () => {
    let [getMenuItem, setGetMenuItem] = useState([]);

    useEffect(() => {

        fetch('/api/create-menu')
            .then((getNewInfoMenu) => {
                return getNewInfoMenu.json();
            })
            .then((getTextMenu) => {
                setGetMenuItem(getTextMenu);
            })

    }, []);

    return(
        <ul className="list-menu">
            {
                getMenuItem.map((item) => {
                    return(
                        <li className="menu-item" key={item._id}>
                            <Link to={item.linkTitle}>
                                        <span>
                                            {item.title}
                                        </span>
                            </Link>

                        </li>
                    )
                })
            }

        </ul>
    );
};

export default Menu;