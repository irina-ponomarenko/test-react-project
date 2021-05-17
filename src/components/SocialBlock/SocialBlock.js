import React from "react";

import "./Social.css";

import {Link} from "react-router-dom";

const SocialBlock = () => {
    return(
        <div>
            <ul className="social-media-list">
                <li>
                    <Link to="https://twitter.com/mark_heath" target="_blank">
                        <img src="https://unpkg.com/simple-icons@latest/icons/twitter.svg" alt="Twitter" title="Twitter"/>
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/markheath" target="_blank">
                        <img src="https://unpkg.com/simple-icons@latest/icons/github.svg" alt="GitHub" title="GitHub"/>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.shareasale.com/r.cfm?u=1036405&b=611266&m=53701&afftrack=&urllink=www%2Epluralsight%2Ecom%2Fauthor%2Fmark%2Dheath" target="_blank">
                        <img src="https://unpkg.com/simple-icons@latest/icons/pluralsight.svg" alt="Pluralsight" title="Pluralsight"/>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.youtube.com/channel/UChV2-HyJ9XzsKLQRztd7Pmw" target="_blank">
                        <img src="https://unpkg.com/simple-icons@latest/icons/youtube.svg" alt="YouTube" title="YouTube"/>
                        </Link>
                </li>
                <li>
                    <Link to="https://stackoverflow.com/users/7532/mark-heath" target="_blank">
                        <img src="https://unpkg.com/simple-icons@latest/icons/stackoverflow.svg" alt="Stack Overflow" title="Stack Overflow"/>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SocialBlock;