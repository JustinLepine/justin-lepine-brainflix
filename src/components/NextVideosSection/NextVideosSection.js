import "./NextVideosSection.scss";


function NextVideosSection({ videos, onClick }) {
    return (
        <section className="next-videos-section">
            <h5 className="next-videos-section__subtitle">NEXT VIDEOS</h5>
            <ul className="next-videos">
                {videos.map((video) => {
                    return (
                        <li
                            key={video.id}
                            onClick={() => {
                                onClick(video.id);
                            }}
                        >
                            <img src={video.image} className="next-videos__timg" alt="next-video-timg" />
                            <div className="next-videos__info">
                                <h6 className="next-videos__title">{video.title}</h6>
                                <p className="next-videos__author">{video.author}</p>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </section>
    )
}

export default NextVideosSection;