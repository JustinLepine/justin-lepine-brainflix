import { Component } from "react";
import "./App.scss";
import videosJSON from "./data/video-details.json";
import videosList from "./data/videos.json";
import Nav from "./components/Nav/Nav.js";
import Video from "./components/Video/Video.js";
import Description from "./components/Description/Description.js";
import Comments from "./components/Comments/Comments.js";
import NextVideosSection from "./components/NextVideosSection/NextVideosSection.js";

class App extends Component {
  state = {
    videos: videosJSON,
    selectedVideo: videosJSON[0],
    videoList: videosList
  }

  updateSelectedVideo = (videoId) => {
    const newSelectedVideo = this.state.videos.find((video) => {
      return video.id === videoId;
    })

    this.setState({ selectedVideo: newSelectedVideo });
  }

  render() {
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
        <Description
          title={selectedVideo.title}
          author={selectedVideo.channel}
          views={selectedVideo.views}
          date={selectedVideo.timestamp}
          likes={selectedVideo.likes}
          text={selectedVideo.description}
        />
        <Comments
          videos={selectedVideo.comments}
        />
        <NextVideosSection
          videos={filteredVideos}
          onClick={this.updateSelectedVideo}
        />
      </>
    )
  }
}

export default App;