import React from 'react'
import "./UploadInput.scss";

function UploadInput() {
  return (
    <section className="upload-input">
      <h5 className="upload-input__subtitle">TITLE YOUR VIDEO</h5>
      <textarea className='upload-input__video-title' id="uploadInputVideoTitle" placeholder="Add a title to your video"></textarea>
      <h5 className="upload-input__subtitle">ADD A VIDEO DESCRIPTION</h5>
      <textarea className='upload-input__video-desc' id="uploadInputVideoTitle" placeholder="Add a description to your video"></textarea>
    </section>      
  )
}

export default UploadInput;