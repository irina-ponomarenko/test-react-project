import React from "react";
import {Link} from "react-router-dom";

const SocialLink = (props) => {

    const isBlank =  props.target ? "_blank" : "";

    return(
        <Link to={props.url} target={isBlank}>
            <img
                src={props.src}
                alt={props.alt}
                title={props.title}
            />
        </Link>
    );
};

export default SocialLink;