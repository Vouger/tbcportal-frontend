import React from "react";
import {Link} from "react-router-dom";

import {TRoutes} from "shared/types";
import styles from './PostCard.module.scss';
import slugify from "slugify";

export default function PostCard(props) {
    const { id, title, user, thumbnailUrl, previewText } = props.data;
    const { nickname } = user;

    const titleUrl = slugify(title, {
        locale: 'ru'
    });

    return (
        <Link to={TRoutes.POST(id, titleUrl)} className={styles.root}>
            <div className={styles.card}>
                <div className={styles.cardMedia}>
                    <img
                        src={thumbnailUrl || "/static/tpl.jpg"}
                        alt={title}
                    />
                </div>
                <div className={styles.cardDetails}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            {title}
                        </div>
                        <div className={styles.preview}>
                            {previewText}
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.author}>
                            Автор: {nickname}
                        </div>

                        <Link to={TRoutes.POST(id, titleUrl)} className={styles.continue}>
                            Далее...
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}