import {Editor, EditorState, RichUtils} from 'draft-js';
import {useState} from "react";

import styles from "./ContentEditor.module.scss";
import {Button, ButtonGroup} from "@material-ui/core";

export default function ContentEditor(props) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    const onUnderlineClick = () => {
        setEditorState(
            RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
        );
    };

    const onBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    };

    const onItalicClick = () => {
        setEditorState(
            RichUtils.toggleInlineStyle(editorState, "ITALIC")
        );
    };

    return (
        <div className={styles.root}>
            <div className={styles.toolbar}>
                <ButtonGroup color="primary" variant="contained">
                    <Button onClick={onUnderlineClick}>
                        U
                    </Button>
                    <Button onClick={onBoldClick}>
                        <b>B</b>
                    </Button>
                    <Button onClick={onItalicClick}>
                        <em>I</em>
                    </Button>
                </ButtonGroup>
            </div>

            <div className={styles.container}>
                <Editor
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={setEditorState}
                />
            </div>
        </div>
    );
}