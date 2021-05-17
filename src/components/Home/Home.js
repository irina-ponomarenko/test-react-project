import React, {useRef, useEffect, useState} from "react";

import "../Home/home.css";
import {Link} from "react-router-dom";

const Home = () => {
    let refName = useRef();
    let refLastName = useRef();

    let [getInfo, setGetInfo] = useState([]);
    let [getMenuItem, setGetMenuItem] = useState([]);

    useEffect(() => {
        fetch('/api/create-info')
            .then((getItems) => {
                return getItems.json();
            })
            .then((getUserInfo) => {
               setGetInfo(getUserInfo);
            });

        fetch('/api/create-menu')
            .then((getNewInfoMenu) => {
               return getNewInfoMenu.json();
            })
            .then((getTextMenu) => {
                setGetMenuItem(getTextMenu);
            })

    }, []);

    let handlerClick = (event) =>{
        event.preventDefault();

        let createInfo = {
            name: refName.current.value.trim(),
            lastName: refLastName.current.value.trim(),
        }

        fetch('/api/create-info', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createInfo),
            method: 'POST'
        });
    };


    return(
        <div>
            <header>
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
            </header>
            <form onSubmit={handlerClick}>
                <h2>Write new info about you</h2>
                <input className="input-name" type="text" ref={refName} placeholder="enter your name"/>
                <input className="input-name" type="text" ref={refLastName} placeholder="enter your last name"/>
                <button type="submit">Submit</button>
            </form>

            <ul className="list-info">
                {
                    getInfo.map((item) => {
                        return(
                            <li key={item._id}>
                                <h3>{item.name}</h3>
                                <p>{item.lastName}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Home;