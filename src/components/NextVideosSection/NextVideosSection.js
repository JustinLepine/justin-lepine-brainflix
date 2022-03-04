import "./NextVideosSection.scss";
import React from "react";
import api from "../../utils/api";

class NextVideosSection extends React.Component {
    state = {
        video: []


    }

    // Mounting video from API

    componentDidMount() {
        api
            .getVideo()
            .then(res => {
                this.setState({
                    video: res.data
                })
            })
            .catch(err => err)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.activeTeamId !== this.props.activeTeamId) {
    //         this.updateTeams();
    //     }
    //   }

    render() {
        return (
            <section className="next-videos-section">
                <h5 className="next-videos-section__subtitle">NEXT VIDEOS</h5>
                <ul className="next-videos-section__container">

                    {/* Mapping through all non selected videos */}

                    {this.state.video.map((video) => {
                        return (
                            <li className="next-videos-section__cards"
                                key={video.id}
                                
                            >
                                <img src={video.image} className="next-videos-section__timg" alt="next-video-timg" />
                                <div className="next-videos-section__info">
                                    <h6 className="next-videos-section__title">{video.title}</h6>
                                    <p className="next-videos-section__author">{video.channel}</p>
                                </div>
                            </li>
                        )
                    }
                    )}
                </ul>
            </section>
        )
    }
}

export default NextVideosSection;