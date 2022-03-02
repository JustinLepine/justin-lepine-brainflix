import React from 'react'
import Sample from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import UploadInput from '../../components/UploadInput/UploadInput';

function Upload() {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <h5 className="upload__subtitle">VIDEO THUMBNAIL</h5>
      <img className="upload__picture" src={Sample} alt="video sample" />
      <UploadInput />
    </section>
  )
}

export default Upload;