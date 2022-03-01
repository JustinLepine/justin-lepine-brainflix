import React from 'react'
import Video from "../../components/Video/Video.js";
import Description from "../../components/Description/Description.js";
import Comments from "../../components/Comments/Comments.js";
import NextVideosSection from "../../components/NextVideosSection/NextVideosSection.js";
import videosList from "../../data/videos.json";
import videosJSON from "../../data/video-details.json";
import { Component } from "react";

class Home extends Component {
    state = {
        videos: videosJSON,
        selectedVideo: videosJSON[0],
        videoList: videosList
    }

    // Selecting active video

    updateSelectedVideo = (videoId) => {
        const newSelectedVideo = this.state.videos.find((video) => {
            return video.id === videoId;
        })

        this.setState({ selectedVideo: newSelectedVideo });
    }

    render() {

        // Filtering through videos to insure selected video doesn't run

        const { videoList, selectedVideo } = this.state;
        const filteredVideos = videoList.filter((video) => {
            return video.id !== selectedVideo.id;
        })

        return (
            <>
                <Video
                    poster={selectedVideo.image}
                />
                <div className="app">
                    <section className="app__left">
                        <Description
                            title={selectedVideo.title}
                            author={selectedVideo.channel}
                            views={selectedVideo.views}
                            date={selectedVideo.timestamp}
                            likes={selectedVideo.likes}
                            text={selectedVideo.description}
                        />
                        <Comments
                            howManyComments={selectedVideo.comments.length}
                            videos={selectedVideo.comments}
                        />
                    </section>
                    <section className="app__right">
                        <NextVideosSection
                            videos={filteredVideos}
                            onClick={this.updateSelectedVideo}
                        />
                    </section>
                </div>
            </>
        )
    }
}

export default Home;