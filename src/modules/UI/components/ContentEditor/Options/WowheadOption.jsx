import React, {useState} from "react";
import {EditorState, Modifier} from "draft-js";
import {Avatar} from "@material-ui/core";

import PopupOption from "modules/UI/components/ContentEditor/Options/PopupOption";
import styles from "modules/UI/components/ContentEditor/Options/WowheadOption.module.scss";

function WowheadOption(props) {
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

    const submitAction = () => {
        try {
            new URL(value);
        } catch (e) {
            setError('Not valid url');

            return false;
        }

        const entityKey = editorState
            .getCurrentContent()
            .createEntity('LINK', 'MUTABLE', { url: value, targetOption:'_blank' })
            .getLastCreatedEntityKey();

        let contentState = Modifier.replaceText(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            `wowhead`,
            editorState.getCurrentInlineStyle(),
            entityKey
        );
        let newEditorState = EditorState.push(
            editorState,
            contentState,
            'insert-characters'
        );

        onChange(newEditorState);
        setValue('')
        setError('');

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

            {
                error
                    ? (<span className={styles.error}>{error}</span>)
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

export default WowheadOption;