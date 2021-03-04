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

import styles from './GuideCard.module.scss'
import {TRoutes} from "../../../../shared/types";

export default function GuideCard(props) {
    const { id, title, views, user } = props.guide;
    const { nickname } = user;

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
                    <Typography gutterBottom variant="h7">
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