import React, {useState, useLayoutEffect} from "react";
import {
    EditorState,
    ContentState,
    convertToRaw,
    convertFromHTML,
} from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import YoutubeOption from "./Options/YoutubeOption";
import WowheadOption from "./Options/WowheadOption";
import {customEntityTransform, myBlockRenderer} from "./Utils/helpers";

import styles from "./ContentEditor.module.scss";
import clsx from "clsx";

export default function ContentEditor(props) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const {error, helperText} = props;

    useLayoutEffect(() => {
        setEditorState(
            EditorState.createWithContent(
                ContentState.createFromBlockArray(
                    convertFromHTML(props.editorText)
                )
            )
        )
        props.onChange(props.editorText)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.editorText])

    const handleChange = (editorState) => {
        setEditorState(editorState);

        props.onChange(
            draftToHtml(convertToRaw(editorState.getCurrentContent()), null, null, customEntityTransform)
        )
    };

    return (
        <>
            <div className={clsx(styles.root, error && styles.error)}>
                <Editor
                    editorClassName={styles.container}
                    toolbarClassName={styles.toolbar}
                    editorState={editorState}
                    onEditorStateChange={handleChange}
                    toolbarCustomButtons={[<YoutubeOption />, <WowheadOption />]}
                    customBlockRenderFunc={myBlockRenderer}
                    toolbar={
                        {
                            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'image', 'remove', 'history'],
                            inline: {
                                options: ['bold', 'italic', 'underline', 'strikethrough']
                            },
                            list: {
                                options: ['unordered', 'ordered'],
                            },
                            link: {
                                options: ['link'],
                            }
                        }
                    }
                />
            </div>
            <p className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error">
                {helperText}
            </p>
        </>
    );
}
