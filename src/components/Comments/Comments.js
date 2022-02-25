import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Comments() {
    return (
        <section className="comment">
            <h3 className="comment__count">3 Comments</h3>
            <div className="comment__container">
                <img src={avatar} className="comment__avatar" alt="avatar-icon" />
                <form id="form__add" className="comment__form">
                    <h5 className="comment__subtitle">JOIN THE CONVERSATION</h5>
                    <textarea id="comment__text" className="comment__text" type="text" name="commentInput" placeholder="Add a new comment"></textarea>
                    <div className="comment__button">
                        <img src={commentIcon} className="comment__icon" alt="comment-icon" />
                        <a href="/" className="comment__upload">COMMENT</a>
                    </div>
                </form>
            </div>
            {/* <div class="comment__feedback">
                <img class="comment__icon" />
                <div class="comment__box">
                    <h5 class="comment__name">Connor Walton</h5>
                    <p class="comment__time">02/17/2021</p>
                    <p class="comment__message">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</p>
                </div>
            </div> */}
        </section>
    )
}

export default Comments;