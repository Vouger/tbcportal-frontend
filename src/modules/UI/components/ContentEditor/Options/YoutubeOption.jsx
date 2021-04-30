import React, {useState} from "react";
import {EditorState, Modifier} from "draft-js";

import YoutubeIcon from "modules/UI/components/icons/YoutubeIcon";
import PopupOption from "modules/UI/components/ContentEditor/Options/PopupOption";

function YoutubeOption(props) {
    const { editorState, onChange, modalHandler } = props;
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const submitAction = () => {

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