import React from 'react'
import publishIcon from "../../assets/icons/publish.svg";
import "./UploadInput.scss";

function UploadInput() {
  return (
    <section className="upload-input">
      <h5 className="upload-input__subtitle">TITLE YOUR VIDEO</h5>
      <textarea className='upload-input__video-title' id="uploadInputVideoTitle" placeholder="Add a title to your video"></textarea>
      <h5 className="upload-input__subtitle">ADD A VIDEO DESCRIPTION</h5>
        <textarea className='upload-input__video-desc' id="uploadInputVideoTitle" placeholder="Add a description to your video"></textarea>
      <div className="upload-input__container">
        <div className="upload-input__button">
          <img src={publishIcon} className="upload-input__icon" alt="publish-icon" />
          <a href="/" className="upload-input__publish">PUBLISH</a>
        </div>
        <div className="upload-input__cancel-button">
          <a href="/" className="upload-input__cancel">CANCEL</a>
        </div>
      </div>
    </section>
  )
}

export default UploadInput;