import YoutubeComponent from "modules/UI/components/ContentEditor/Component/YoutubeComponent";

export function myBlockRenderer (block, config) {
    const type = block.getType();

    if (type === 'atomic') {
        const contentState = config.getEditorState().getCurrentContent();
        const entity = contentState.getEntity(block.getEntityAt(0));

        if (entity.type === 'EMBEDDED_LINK_YOUTUBE') {
            return {
                component: YoutubeComponent,
                editable: false,
            };
        }

        return undefined;
    }
}

export function customEntityTransform (entity) {
    const {data} = entity

    if (entity.type === 'EMBEDDED_LINK_YOUTUBE') {
        return `
            <div style="padding-bottom: 59%;position:relative;">
                <iframe src=${data.src} style="width: 100%; height: 100%; position:absolute;"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        `
    }
}