import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import tools from "../../utils/tools";

function Comments({ videos, howManyComments }) {
    return (
        <section className="comment">
            <h3 className="comment__count">{howManyComments} Comments</h3>
            <div className="comment__container">
                <img src={avatar} className="comment__avatar" alt="avatar-icon" />
                <form id="form__add" className="comment__form">
                    <div className="comment__input">
                        <h5 className="comment__subtitle">JOIN THE CONVERSATION</h5>
                        <textarea htmlFor="comment" id="comment__text" className="comment__text" type="text" name="commentInput" placeholder="Add a new comment"></textarea>
                    </div>
                    <div className="comment__button">
                        <img src={commentIcon} className="comment__icon" alt="comment-icon" />
                        <a href="/" className="comment__upload">COMMENT</a>
                    </div>
                </form>
            </div>
            <ul className="user-comments">
                {videos.map((video) => {
                    return (
                        <li key={video.timestamp}>
                            <div className="user-comments__feedback">
                                <div className="user-comments__icon"></div>
                                <div className="user-comments__box">
                                    <h5 className="user-comments__name">{video.name}</h5>
                                    <p className="user-comments__time">{tools.formattedDate(video.timestamp)}</p>
                                    <p className="user-comments__message">{video.comment}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Comments;