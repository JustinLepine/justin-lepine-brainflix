import React from 'react'
import publishIcon from "../../assets/icons/publish.svg";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "./UploadInput.scss";

function UploadInput() {

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post("/videos", {
                title: e.target.inputTitle.value,
                description: e.target.inputDesc.value,
            })
            .then(res => {
                console.log(res.data.id)
                history.push(`/videos/${res.data.id}`)
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
                    <button className="upload-buttons__publish">PUBLISH</button>
                </div>
                <div className="upload-buttons__cancel-button">
                    <button className="upload-buttons__cancel">CANCEL</button>
                </div>
            </div>
        </form>
    )
}

export default UploadInput;