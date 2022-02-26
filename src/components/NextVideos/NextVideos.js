import "./NextVideos.scss";

function NextVideos({ title, image, author }) {
    return (
        <div className="next-videos">
            <img src={image} className="next-videos__timg" alt="next-video-timg" />
            <div className="next-videos__info">
                <h6 className="next-videos__title">{title}</h6>
                <p className="next-videos__author">{author}</p>
            </div>
        </div> 
    )
}

export default NextVideos;