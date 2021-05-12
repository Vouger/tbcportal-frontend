import React, {useState} from "react";
import {EditorState, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import YoutubeOption from "./Options/YoutubeOption";
import WowheadOption from "./Options/WowheadOption";
import {customEntityTransform, myBlockRenderer} from "./Utils/helpers";

import styles from "./ContentEditor.module.scss";

export default function ContentEditor(props) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleChange = (editorState) => {
        setEditorState(editorState);

        props.onChange(
            draftToHtml(convertToRaw(editorState.getCurrentContent()), null, null, customEntityTransform)
        )
    };

    return (
        <div className={styles.root}>
            <Editor
                editorClassName={styles.container}
                toolbarClassName={styles.toolbar}
                editorState={editorState}
                onEditorStateChange={handleChange}
                toolbarCustomButtons={[<YoutubeOption />, <WowheadOption />]}
                customBlockRenderFunc={myBlockRenderer}
                toolbar={
                    {
                        inline: {
                            className: styles.inline
                        }
                    }
                }
            />
        </div>
    );
}