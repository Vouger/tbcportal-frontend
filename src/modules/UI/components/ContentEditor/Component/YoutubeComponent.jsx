import React from "react";

import styles from './YoutubeComponent.module.scss'

export default function YoutubeComponent ({ block, contentState }) {
    const entity = contentState.getEntity(block.getEntityAt(0));
    const { src } = entity.getData();

    return (
        <div className={styles.root}>
            <iframe src={src}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
    )
}