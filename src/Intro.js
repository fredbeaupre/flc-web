import React, { useState } from 'react';
import group from "./img/members/IMG_3364_group_nomask.png";
import group_mask from "./img/members/IMG_3356_group_mask.png";
import "./Intro.css"
import strings from "./strings.json"

function Intro(){
    const [withMask, setWithMask] = useState(false);

    const onmouseover = () => {
        setWithMask(true);
    }

    const onmouseout = () => {
        setWithMask(false);
    }

    return (
        <div className="container">
            <div className="left" onMouseOver={onmouseover} onMouseOut={onmouseout}>
                <img src={withMask ? group_mask : group} alt=""></img> 
            </div>
            <div className="right">
                <span className="right__title">{strings.Intro.label}</span>
                <span className="right__content">{strings.Intro.content}</span>
                <span>
                    <button className="readmore__button">{strings.Intro.readmore}</button>
                </span>
            </div>
        </div>
    )
}

export default Intro;
