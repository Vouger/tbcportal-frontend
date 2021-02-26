import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

import styles from './GuideCard.module.scss'

export default function GuideCard() {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="160"
                    image="/static/tpl.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Warrior guide
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}