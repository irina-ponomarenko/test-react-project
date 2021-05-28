import React from "react";

import "./Social.css";

import SocialLink from "../SocialLink/SocialLink";

const SocialBlock = () => {
    let socialList = [
        {
            url: "https://twitter.com/mark_heath",
            src: "https://unpkg.com/simple-icons@latest/icons/twitter.svg",
            alt: "Twitter",
            title: "Twitter",
            target: true,
        },
        {
            url: "https://github.com/markheath",
            src: "https://unpkg.com/simple-icons@latest/icons/github.svg",
            alt: "GitHub",
            title: "GitHub",
            target: true,
        },
        {
            url: "https://www.shareasale.com/r.cfm?u=1036405&b=611266&m=53701&afftrack=&urllink=www%2Epluralsight%2Ecom%2Fauthor%2Fmark%2Dheath",
            src: "https://unpkg.com/simple-icons@latest/icons/pluralsight.svg",
            alt: "Pluralsight",
            title: "Pluralsight",
        },
        {
            url: "https://www.youtube.com/channel/UChV2-HyJ9XzsKLQRztd7Pmw",
            src: "https://unpkg.com/simple-icons@latest/icons/youtube.svg",
            alt: "YouTube",
            title: "YouTube",
        },
        {
            url: "https://stackoverflow.com/users/7532/mark-heath",
            src: "https://unpkg.com/simple-icons@latest/icons/stackoverflow.svg",
            alt: "Stack Overflow",
            title: "Stack Overflow",
        }

    ]

    return(
        <div>
            <ul className="social-media-list">
                {
                    socialList.map((item, index) => {
                        return(
                            <li key={index}>
                                <SocialLink
                                    url={item.url}
                                    src={item.src}
                                    alt={item.alt}
                                    title={item.title}
                                    target={item.target}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SocialBlock;