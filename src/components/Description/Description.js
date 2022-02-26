import "./Description.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function Description({ title, author, views, date, likes, text }) {
    return (
        

        <section className="description">
            <h1 className="description__title">{title}</h1>
            <div className="description__container">
                <h4 className="description__artist">By {author}</h4>
                <div className="description__socials">
                    <img src={viewsIcon} className="description__icons" alt="views-icon" />
                    <p className="description__views">{views}</p>
                </div>
                <p className="description__dates">{date}</p>
                <div className="description__socials">
                    <img src={likesIcon} className="description__icons" alt="likes-icon" />
                    <p className="description__likes">{likes}</p>
                </div>
            </div>
            <p className="description__text">{text}</p>
        </section>
    )
}

export default Description;