import "./UserComments.scss";

function UserComments({ video }) {
    const formattedDate = (timestamp) => {
        let date = new Date(Number(timestamp))
        const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
        date = date.toLocaleDateString("en-US", options);
        return date;
    }
    return (
        <ul className="user-comments">
            {video.map((video) => {
                return (
                    <li  key={video.timestamp}>
                        <div className="user-comments__feedback">
                            <div className="user-comments__icon"></div>
                            <div className="user-comments__box">
                                <h5 className="user-comments__name">{video.name}</h5>
                                <p className="user-comments__time">{formattedDate(video.timestamp)}</p>
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