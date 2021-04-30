import React, {useState} from "react";
import {EditorState, Modifier} from "draft-js";
import {Avatar} from "@material-ui/core";

import styles from "modules/UI/components/ContentEditor/Options/WowheadOption.module.scss";
import PopupOption from "modules/UI/components/ContentEditor/Options/PopupOption";

function WowheadOption(props) {
    const { editorState, onChange, modalHandler } = props;
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const submitAction = () => {

        return true;
    }

    return (
        <PopupOption
            modalHandler={modalHandler}
            icon={<Avatar src='/static/icons/wowhead.jpg' variant='rounded' className={styles.avatar} />}
            submitAction={submitAction}
            buttonDisabled={buttonDisabled}
        >
            <div className="rdw-embedded-modal-header">
                <span className="rdw-embedded-modal-header-option">
                    Wowhead item
                    <span className="rdw-embedded-modal-header-label"></span>
                </span>
            </div>
        </PopupOption>
    );
}

export default WowheadOption;