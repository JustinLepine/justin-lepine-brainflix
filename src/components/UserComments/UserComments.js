import "./UserComments.scss";

function UserComments({name, time, comment}) {
    return (
        <section className="user-comments">
            <div className="user-comments__feedback">
                <div className="user-comments__icon"></div>
                <div className="user-comments__box">
                    <h5 className="user-comments__name">{name}</h5>
                    <p className="user-comments__time">{time}</p>
                    <p className="user-comments__message">{comment}</p>
                </div>
            </div>
        </section>
    )
}

export default UserComments;