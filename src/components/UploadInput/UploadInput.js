import React from 'react'
import publishIcon from "../../assets/icons/publish.svg";
import axios from 'axios';

import "./UploadInput.scss";
import "../UploadButtons/UploadButtons.scss"

function UploadInput() {

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post("/videos", {
                title: e.target.input.value,
                channel: "Best Video Ever",
                image: "./public/images/image",
                description: "This video has the best activies ever",
                views: "999,999",
                likes: 125,
                video: "https://project-2-api.herokuapp.com/stream",
                timestamp: Date.now(),
                comments: e.taget.inputDesc.value,
            })
            .then(res => {
                res.status(201).send(newVideo)
            })
            .catch(err => {
                console.log(err)
                err.status(404)
            })
    }


    return (
        <form onSubmit={submitHandler} className="upload-input">
            <div className='upload-input__top'>
                <h5 className="upload-input__subtitle">TITLE YOUR VIDEO</h5>
                <textarea name='inputTitle' className='upload-input__video-title' id="uploadInputVideoTitle" placeholder="Add a title to your video"></textarea>
                <h5 className="upload-input__subtitle">ADD A VIDEO DESCRIPTION</h5>
                <textarea name='inputDesc' className='upload-input__video-desc' id="uploadInputVideoTitle" placeholder="Add a description to your video"></textarea>
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