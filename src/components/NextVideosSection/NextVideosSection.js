import "./NextVideosSection.scss";

function NextVideosSection({ videos, onClick }) {
    return (
        <section className="next-videos-section">
            <h5 className="next-videos-section__subtitle">NEXT VIDEOS</h5>
            <ul className="next-videos-section__container">
                {videos.map((video) => {
                    return (
                        <li className="next-videos-section__cards"
                            key={video.id}
                            onClick={() => {
                                onClick(video.id);
                            }}
                        >
                            <img src={video.image} className="next-videos-section__timg" alt="next-video-timg" />
                            <div className="next-videos-section__info">
                                <h6 className="next-videos-section__title">{video.title}</h6>
                                <p className="next-videos-section__author">{video.channel}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default NextVideosSection;