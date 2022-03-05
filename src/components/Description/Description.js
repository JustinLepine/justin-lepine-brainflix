import "./Description.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";


function Description({ selectedVideo }) {
    //Formatting date to mm/dd/yyyy

    const formattedDate = (timestamp) => {
        let date = new Date(Number(timestamp))
        const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
        date = date.toLocaleDateString("en-US", options);
        return date;
    }

    return (
        <section className="description">
            <h1 className="description__title">{selectedVideo.title}</h1>
            <div className="description__container">
                <h4 className="description__artist">By {selectedVideo.channel}</h4>
                <div className="description__socials">
                    <img src={viewsIcon} className="description__icons" alt="views-icon" />
                    <p className="description__views">{selectedVideo.views}</p>
                </div>
                <p className="description__dates">{formattedDate(selectedVideo.timestamp)}</p>
                <div className="description__socials">
                    <img src={likesIcon} className="description__icons" alt="likes-icon" />
                    <p className="description__likes">{selectedVideo.likes}</p>
                </div>
                <p className="description__text">{selectedVideo.text}</p>
            </div>
        </section>
    )
}

export default Description;