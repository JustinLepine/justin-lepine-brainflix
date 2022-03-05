import React from 'react'
import Video from "../../components/Video/Video.js";
import Description from "../../components/Description/Description.js";
import Comments from "../../components/Comments/Comments.js";
import NextVideosSection from "../../components/NextVideosSection/NextVideosSection.js";
import { Component } from "react";
import api from '../../utils/api'

class Home extends Component {
    state = {
        videoList: [],
        selectedVideo: null
    }


    componentDidMount() {

        api.getVideo()
            .then(res => {
                this.setState({
                    videoList: res.data
                });
                return api.getVideoId(this.props.match.params.id || res.data.id)

            })
            .then(res => {
                this.setState({
                    selectedVideo: res.data
                })
            })
    }

    componentDidUpdate(prevProps) {

        // console.log(prevProps)
        const currentId = prevProps.match.params.id || this.state.videoList[0].id;
        const prevId = prevProps.match.params.id;

        if (prevId !== this.props.match.params.id) {
            api.getVideoId(currentId)
                .then(res => {
                    this.setState({
                        selectedVideo: res.data
                    })
                })
        }
    }

    // Selecting active video

    updateSelectedVideo = (videoId) => {
        const newSelectedVideo = this.state.videos.find((video) => {
            return video.id === videoId;
        })
        console.log(newSelectedVideo)
        this.setState({ selectedVideo: newSelectedVideo });
    }

    render() {

        if (!this.state.selectedVideo) {
            return <div>Loading ...</div>
        }

        // Filtering through videos to insure selected video doesn't run

        const { videoList, selectedVideo } = this.state;
        const filteredVideos = videoList.filter((video) => {
            return video.id !== selectedVideo.id;
        })
        return (
            <>
                <Video
                    poster={this.state.selectedVideo.image}
                />
                <div className="app">
                    <section className="app__left">
                        <Description
                            selectedVideo={this.state.selectedVideo}
                        />
                        <Comments
                            howManyComments={this.state.selectedVideo.comments.length}
                            videos={this.state.selectedVideo.comments}
                        />
                    </section>
                    <section className="app__right">
                        <NextVideosSection
                            videos={filteredVideos}
                        />
                    </section>
                </div>
            </>
        )
    }
}

export default Home;