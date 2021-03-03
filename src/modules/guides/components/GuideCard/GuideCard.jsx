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

import styles from './GuideCard.module.scss'
import {Link} from "react-router-dom";
import {TRoutes} from "../../../../shared/types";

export default function GuideCard(props) {
    const {id, title, text, views} = props.guide;

    return (
        <Card>
            <CardActionArea component={Link} to={TRoutes.GUIDE(id)}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="160"
                    image="/static/tpl.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent className={styles.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" textOverflow="ellipsis" className={styles.text}>
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Visibility className={styles.views}/> {views}
                </CardActions>
            </CardActionArea>
        </Card>
    )
}