import "./UserComments.scss";

function UserComments() {
    return (
        <section className="user-comments">
            <div className="user-comments__feedback">
                <div className="user-comments__icon"></div>
                <div className="user-comments__box">
                    <h5 className="user-comments__name">Connor Walton</h5>
                    <p className="user-comments__time">02/17/2021</p>
                    <p className="user-comments__message">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</p>
                </div>
            </div>
        </section>
    )
}

export default UserComments;