import { Component } from "react";
import "./App.scss";
import videosJSON from "./data/video-details.json";
import Nav from "./components/Nav/Nav.js";
import Video from "./components/Video/Video.js";
import Description from "./components/Description/Description.js";
import Comments from "./components/Comments/Comments.js";
import NextVideosSection from "./components/NextVideosSection/NextVideosSection.js";

class App extends Component {
  state = {
    videos: videosJSON,
    selectedVideo: videosJSON[0]
  }

  updateSelectedVideo = (videoId) => {
    const newSelectedVideo = this.state.videos.find((video) => {
      return video.id === videoId;
    })

    this.setState({ selectedVideo: newSelectedVideo });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    const filteredVideos = videos.filter((video) => {
      return video.id !== selectedVideo.id;
    })

    return (
      <>
        <Nav />
        <Video
          poster={selectedVideo.image}
          video={selectedVideo.video}
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
          key={selectedVideo.comments[0].timestamp}
          name={selectedVideo.comments[0].name}
          time={selectedVideo.comments[0].timestamp}
          comment={selectedVideo.comments[0].comment}
        />
        <NextVideosSection
          title={filteredVideos.title}
          image={filteredVideos.image}
          author={filteredVideos.channel}
        />
      </>
    )
  }
}

export default App;