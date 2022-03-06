import React from 'react'
import publishIcon from "../../assets/icons/publish.svg";
import "./UploadButtons.scss"

function UploadButtons() {
  return (
    <div className="upload-buttons__container">
        <div className="upload-buttons__button">
          <img src={publishIcon} className="upload-buttons__icon" alt="publish-icon" />
          <a href="/" className="upload-buttons__publish">PUBLISH</a>
        </div>
        <div className="upload-buttons__cancel-button">
          <a href="/" className="upload-buttons__cancel">CANCEL</a>
        </div>
      </div>
  )
}

export default UploadButtons;