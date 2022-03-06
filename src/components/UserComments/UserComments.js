import "./UserComments.scss";
import tools from "../../utils/tools";

function UserComments({ video }) {   
    return (
        <ul className="user-comments">
            {video.map((video) => {
                return (
                    <li  key={video.id}>
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
    )
}

export default UserComments;