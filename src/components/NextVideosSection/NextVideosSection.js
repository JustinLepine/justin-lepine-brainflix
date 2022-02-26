import "./NextVideosSection.scss";
import NextVideos from "../NextVideos/NextVideos.js";


function NextVideosSection({ title, image, author }) {
    return (
        <section className="next-videos-section">
            <h5 className="next-videos-section__subtitle">NEXT VIDEOS</h5>
            <NextVideos
                title = {title}
                image = {image}
                author = {author}
            />
        </section>
    )
}

export default NextVideosSection;