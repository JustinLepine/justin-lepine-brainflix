import "./NextVideosSection.scss";
import NextVideos from "../NextVideos/NextVideos.js";


function NextVideosSection() {
    return (
        <section className="next-videos-section">
            <h5 className="next-videos-section__subtitle">NEXT VIDEOS</h5>
            <NextVideos />
            <NextVideos />
            <NextVideos />
            <NextVideos />
            <NextVideos />
            <NextVideos />
            <NextVideos />
        </section>
    )
}

export default NextVideosSection;