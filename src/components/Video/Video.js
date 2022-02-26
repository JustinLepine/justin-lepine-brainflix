import "./Video.scss";

function Video({ poster, video }) {
  return (
    <>
      <video className="video" poster={poster}>
        <source src={video}/>
      </video>
    </>
  )
}

export default Video;