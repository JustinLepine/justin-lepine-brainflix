import "./NextVideosSection.scss";
import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom"

function NextVideosSection(videos) {
    return (
        <section className="next-videos-section">
            <h5 className="next-videos-section__subtitle">NEXT VIDEOS</h5>
            <ul className="next-videos-section__container">

                {/* Mapping through all non selected videos */}

                {videos.videos.map((video) => {
                    return (
                        <Link to={`/videos/${video.id}`} key={video.id} >
                            <li className="next-videos-section__cards"
                            >
                                <img src={video.image} className="next-videos-section__timg" alt="next-video-timg" />
                                <div className="next-videos-section__info">
                                    <h6 className="next-videos-section__title">{video.title}</h6>
                                    <p className="next-videos-section__author">{video.channel}</p>
                                </div>
                            </li>
                        </Link>
                    )
                }
                )}
            </ul>
        </section>
    )
}


export default NextVideosSection;