import React from 'react'
import Video from "../../components/Video/Video.js";
import Description from "../../components/Description/Description.js";
import Comments from "../../components/Comments/Comments.js";
import NextVideosSection from "../../components/NextVideosSection/NextVideosSection.js";
import { Component } from "react";
import tools from '../../utils/tools';

class Home extends Component {
    state = {
        videoList: [],
        selectedVideo: null
    }

    componentDidMount() {

        tools.getVideo()
            .then(res => {
                this.setState({
                    videoList: res.data
                });

                return tools.getVideoId(this.props.match.params.id || res.data[0].id)
            })
            .catch(e => console.log("error", e))
            
            .then(res => {
                this.setState({
                    selectedVideo: res.data
                });
            })
            .catch(e => console.log("error", e));
    }

    componentDidUpdate(prevProps) {

        const currentId = this.props.match.params.id || this.state.videoList[0].id;
        const prevId = prevProps.match.params.id;

        if (prevId !== this.props.match.params.id) {
            
            tools.getVideoId(currentId)
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
        this.setState({ selectedVideo: newSelectedVideo });
    }

    render() {
        
        if (!this.state.selectedVideo) {
            return <div>Loading ...</div>
        }

        // Filtering through videos to insure selected video doesn't show up in list

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