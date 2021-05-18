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
            <div class="youtube-wrapper">
                <iframe src=${data.src}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        `
    }
}