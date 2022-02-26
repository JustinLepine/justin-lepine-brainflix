import "./UserComments.scss";

function UserComments({ video }) {
    return (
        <ul>
            {video.map((video) => {
                return (
                    <li className="user-comments" key={video.timestamp}>
                        <div className="user-comments__feedback">
                            <div className="user-comments__icon"></div>
                            <div className="user-comments__box">
                                <h5 className="user-comments__name">{video.name}</h5>
                                <p className="user-comments__time">{video.timestamp}</p>
                                <p className="user-comments__message">{video.comment}</p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default UserComments;