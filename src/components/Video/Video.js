import "./Video.scss";

function Video() {
  return (
<>
{/* <video><source width="420" height="345"  src="https://www.youtube.com/watch?v=OJnsdRqhR0M" type="video/mp4"/></video> */}
<iframe title="test" className="video" src="https://player.vimeo.com/video/409108803?h=c755fd5910" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
    </>
  )
}

export default Video;