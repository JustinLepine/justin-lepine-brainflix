import React from 'react'
import publishIcon from "../../assets/icons/publish.svg";


import "./UploadInput.scss";
import "../UploadButtons/UploadButtons.scss"

function UploadInput() {
  return (
    <form className="upload-input">

    <div className='upload-input__top'>
      <h5 className="upload-input__subtitle">TITLE YOUR VIDEO</h5>
      <textarea className='upload-input__video-title' id="uploadInputVideoTitle" placeholder="Add a title to your video"></textarea>
      <h5 className="upload-input__subtitle">ADD A VIDEO DESCRIPTION</h5>
      <textarea className='upload-input__video-desc' id="uploadInputVideoTitle" placeholder="Add a description to your video"></textarea>
    </div>

      <div className="upload-buttons">
        <div className="upload-buttons__button">
          <img src={publishIcon} className="upload-buttons__icon" alt="publish-icon" />
          <a href="/" className="upload-buttons__publish">PUBLISH</a>
        </div>
        <div className="upload-buttons__cancel-button">
          <a href="/" className="upload-buttons__cancel">CANCEL</a>
        </div>
      </div>

    </form>
  )
}

export default UploadInput;