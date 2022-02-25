import Nav from "./components/Nav/Nav.js";
import Video from "./components/Video/Video.js";
import Description from "./components/Description/Description.js";
import Comments from "./components/Comments/Comments.js";
import UserComments from "./components/UserComments/UserComments.js";
import NextVideosSection from "./components/NextVideosSection/NextVideosSection.js";
import "./App.scss";

function App() {
  return (
    <>
      <Nav />
      <Video />
      <Description />
      <Comments />
      <UserComments />
      <UserComments />
      <UserComments />
      <NextVideosSection />

    </>
  );
}

export default App;