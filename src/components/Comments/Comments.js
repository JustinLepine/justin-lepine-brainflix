import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import UserComments from "../UserComments/UserComments";

function Comments({ videos, howManyComments }) {
    return (
        <section className="comment">
            <h3 className="comment__count">{howManyComments} Comments</h3>
            <div className="comment__container">
                <img src={avatar} className="comment__avatar" alt="avatar-icon" />
                <form id="form__add" className="comment__form">
                    <div className="comment__input">
                        <h5 className="comment__subtitle">JOIN THE CONVERSATION</h5>
                        <textarea id="comment__text" className="comment__text" type="text" name="commentInput" placeholder="Add a new comment"></textarea>
                    </div>
                    <div className="comment__button">
                        <img src={commentIcon} className="comment__icon" alt="comment-icon" />
                        <a href="/" className="comment__upload">COMMENT</a>
                    </div>
                </form>
            </div>
            <UserComments
                video={videos}
            />
        </section>
    )
}

export default Comments;