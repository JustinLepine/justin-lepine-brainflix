// import React from "react";
import "./Description.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
// import videoJSON from "../../data/videos.json";

function Description() {
    return (
        <section className="description">
            <h1 className="description__title">BMX Rampage: 2021 Highlights</h1>
            <div className="description__container">
                <h4 className="description__artist">By Red Crow</h4>
                <div className="description__socials">
                    <img src={viewsIcon} className="description__icons" alt="views-icon"/>
                    <p className="description__views">1,001,023</p>
                </div>
                <p className="description__dates">07/11/2021</p>
                <div className="description__socials">
                    <img src={likesIcon} className="description__icons" alt="likes-icon"/>
                    <p className="description__likes">110,985</p>
                </div>
            </div>
            <p className="description__text">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>            
        </section>
    );
}

export default Description