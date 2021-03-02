import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";

import styles from './GuideCard.module.scss'
import {Link} from "react-router-dom";
import {TRoutes} from "../../../../shared/types";

export default function GuideCard(props) {
    const {id, title, text} = props.guide;

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
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" textOverflow="ellipsis" className={styles.text}>
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}