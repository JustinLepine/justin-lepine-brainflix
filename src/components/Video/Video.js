import "./Video.scss";

function Video({ poster }) {
  return (
    <>
      <video className="video" poster={poster}>
      </video>
    </>
  )
}

export default Video;