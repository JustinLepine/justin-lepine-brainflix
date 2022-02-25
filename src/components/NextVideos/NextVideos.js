import "./NextVideos.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function NextVideos() {
    return (
        <div className="next-videos">
            <img src={avatar} className="next-videos__timg" alt="next-video-timg" />
            <div className="next-videos__info">
                <h6 className="next-videos__title">Become A Travel Pro In One Easy Lessson</h6>
                <p className="next-videos__author">Todd Welch</p>
            </div>
        </div> 
    )
}

export default NextVideos;