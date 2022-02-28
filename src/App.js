import { Component } from "react";
import "./App.scss";
import videosJSON from "./data/video-details.json";
import videosList from "./data/videos.json";
import Nav from "./components/Nav/Nav.js";
import Video from "./components/Video/Video.js";
import Description from "./components/Description/Description.js";
import Comments from "./components/Comments/Comments.js";
import NextVideosSection from "./components/NextVideosSection/NextVideosSection.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

  // JSON data import

class App extends Component {
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
        <Nav />
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

export default App;