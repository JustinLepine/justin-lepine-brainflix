import React from 'react'
import Video from "../../components/Video/Video.js";
import Description from "../../components/Description/Description.js";
import Comments from "../../components/Comments/Comments.js";
import NextVideosSection from "../../components/NextVideosSection/NextVideosSection.js";
import { Component } from "react";
import axios from 'axios';
import api from '../../utils/api.js';

class Home extends Component {
    state = {
        // videos: videosJSON,
        // videoList: videosList,
        selectedVideo: null
    }

    componentDidMount() {
        this.loadVideo()
    }

    test = () => {
        api
            .getVideo()
            .then(res => {
                this.setState({
                    videoList: res.data
                })
            })
            .catch(err => {
                console.log('error')
            })
        }

    loadVideo = () => {
        axios
            .get('https://project-2-api.herokuapp.com/videos?api_key=e19b596e-2655-4a4f-9242-e96ab392744b')
            .then(res => {
                axios
                    .get(`https://project-2-api.herokuapp.com/videos/${res.data[0].id}?api_key=e19b596e-2655-4a4f-9242-e96ab392744b`)
                    .then(res => {
                        this.setState({
                            selectedVideo: res.data
                        });
                    });
            });
    }

    componentDidUpdate(prevProps) {
        const { videoId: prevVideoId } = prevProps.match.params;
        const { videoId } = this.props.match.params;

        if (prevVideoId !== videoId) {
            this.loadVideo(videoId);
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

        // Filtering through videos to insure selected video doesn't run

        // const { videoList, selectedVideo } = this.state;
        // const filteredVideos = videoList.filter((video) => {
        //     return video.id !== selectedVideo.id;
        // })

        // console.log(test())
        
        return (
            <>
                <Video
                    poster={this.state.selectedVideo.image}
                />
                <div className="app">
                    <section className="app__left">
                        <Description
                            title={this.state.selectedVideo.title}
                            author={this.state.selectedVideo.channel}
                            views={this.state.selectedVideo.views}
                            date={this.state.selectedVideo.timestamp}
                            likes={this.state.selectedVideo.likes}
                            text={this.state.selectedVideo.description}
                        />
                        <Comments
                            howManyComments={this.state.selectedVideo.comments.length}
                            videos={this.state.selectedVideo.comments}
                        />
                        </section>
                    <section className="app__right">
                        <NextVideosSection
                            // videos={filteredVideos}
                            onClick={this.updateSelectedVideo}
                        />
                    </section>
                </div>
            </>
        )
    }
}

export default Home;