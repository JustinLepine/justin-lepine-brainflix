import React from 'react'
import Sample from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import UploadInput from '../../components/UploadInput/UploadInput';

function Upload() {
  return (
    <>
      <h1 className="upload__title">Upload Video</h1>
      <section className="upload">
        <div className='upload__container'>
          <h5 className="upload__subtitle">VIDEO THUMBNAIL</h5>
          <img className="upload__picture" src={Sample} alt="video sample" />
        </div>
        <div className='upload__container upload__container--right'>
          <UploadInput />
        </div>
      </section>
    </>
  )
}

export default Upload;