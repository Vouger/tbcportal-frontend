import React from "react";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";
import {Visibility} from "@material-ui/icons";
import {Link} from "react-router-dom";
import clsx from "clsx";
import slugify from 'slugify';
import PropTypes from "prop-types";

import {TRoutes} from "shared/types";

import styles from './GuideCard.module.scss';

function GuideCard({guide}) {
    const { id, title, className, views, thumbnailUrl, user } = guide;
    const { nickname } = user;

    const titleUrl = slugify(title, {
        locale: 'ru'
    });

    return (
        <Card className={clsx(styles.root, styles[className])}>
            <CardActionArea component={Link} to={TRoutes.GUIDE(id, titleUrl)}>
                <CardMedia
                    component="img"
                    alt={title}
                    height="160"
                    image={thumbnailUrl || "/static/tpl.jpg"}
                    title={title}
                />
                <CardContent className={styles.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="body1">
                        {nickname}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Visibility className={styles.views}/> {views}
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

GuideCard.propTypes = {
    guide: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        user: PropTypes.shape({
            nickname: PropTypes.string.isRequired
        })
    })
}

export default GuideCard;