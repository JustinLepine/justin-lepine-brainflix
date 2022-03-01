import React from 'react'
import Sample from "../../assets/images/Mohan-muruge.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import "./Upload.scss";

function Upload() {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <h5 className="upload__subtitle">VIDEO THUMBNAIL</h5>
      <img className="upload__picture" src={Sample} alt="video sample" />
      <h5 className="upload__subtitle">TITLE YOUR VIDEO</h5>
      <textarea className='upload__video-title' id="uploadVideoTitle" placeholder="Add a title to your video"></textarea>
      <h5 className="upload__subtitle">ADD A VIDEO DESCRIPTION</h5>
      <textarea className='upload__video-desc' id="uploadVideoTitle" placeholder="Add a description to your video"></textarea>
      <div className="upload__button">
        <img src={publishIcon} className="upload__icon" alt="publish-icon" />
        <a href="/" className="upload__publish">PUBLISH</a>
      </div>
      <div className="upload__cancel-button">
        <a href="/" className="upload__cancel">CANCEL</a>
      </div>
    </section>
  )
}

export default Upload;