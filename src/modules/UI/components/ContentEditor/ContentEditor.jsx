import React, {useState} from "react";
import {EditorState, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import styles from "./ContentEditor.module.scss";

export default function ContentEditor(props) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleChange = (editorState) => {
        setEditorState(editorState);

        props.onChange(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
        )
    };

    return (
        <div className={styles.root}>
            <Editor
                editorClassName={styles.container}
                toolbarClassName={styles.toolbar}
                editorState={editorState}
                onEditorStateChange={handleChange}
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