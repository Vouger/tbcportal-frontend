import React, {useState} from "react";
import {AtomicBlockUtils } from "draft-js";

import YoutubeIcon from "modules/UI/components/icons/YoutubeIcon";
import PopupOption from "modules/UI/components/ContentEditor/Options/PopupOption";

import style from './YoutubeOption.module.scss'

function YoutubeOption(props) {
    const { editorState, onChange, modalHandler } = props;
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)

        if (event.target.value.length !== 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    const parseUrl = () => {
        setError('');

        try {
            let url = new URL(value);
            let videoId = '';

            if (url.host !== "www.youtube.com" && url.host !== "youtu.be") {
                setError('Not a youtube url');
            }

            if (url.host === "www.youtube.com") {
                videoId = new URLSearchParams(url.search).get("v")
            } else if (url.host === "youtu.be") {
                videoId = url.pathname.substr(1);
            } else {
                setError('Not a youtube url');
                return false;
            }

            if (videoId.length === 0) {
                throw new Error();
            }

            return "https://www.youtube.com/embed/" + videoId;

        } catch (e) {
            setError('Not valid url');

            return false;
        }
    }

    const submitAction = () => {
        const embedUrl = parseUrl();

        if (!embedUrl) {
            return false
        }

        const entityKey = editorState
            .getCurrentContent()
            .createEntity('EMBEDDED_LINK_YOUTUBE', 'MUTABLE', { src: embedUrl, height:'auto', width:'auto' })
            .getLastCreatedEntityKey();

        const newEditorState = AtomicBlockUtils.insertAtomicBlock(
            editorState,
            entityKey,
            ' '
        );

        onChange(newEditorState);
        setValue('')
        setError('');

        return true;
    }

    return (
        <PopupOption
            modalHandler={modalHandler}
            icon={<YoutubeIcon />}
            submitAction={submitAction}
            buttonDisabled={buttonDisabled}
        >
            <div className="rdw-embedded-modal-header">
                <span className="rdw-embedded-modal-header-option">
                    Youtube
                    <span className="rdw-embedded-modal-header-label"></span>
                </span>
            </div>

            {
                error
                    ? (<span className={style.error}>{error}</span>)
                    : ''
            }

            <span className="rdw-embedded-modal-link-input-wrapper">
                <input
                    className="rdw-embedded-modal-link-input"
                    placeholder="Enter link"
                    name="embeddedLink"
                    value={value}
                    onChange={handleChange}
                />
                <span className="rdw-image-mandatory-sign">*</span>
            </span>
        </PopupOption>
    );
}

export default YoutubeOption;