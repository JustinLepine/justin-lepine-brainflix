import "./Video.scss";

function Video({ poster }) {
  return (
    <section className="video">
      <video controls className="video__screen" poster={poster}>
      </video>
    </section>
  )
}

export default Video;