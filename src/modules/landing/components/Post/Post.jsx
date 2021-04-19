import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";

import styles from './Post.module.scss';
import {Link} from "react-router-dom";
import {TRoutes} from "shared/types";

export default function Post(props) {
    const { id, title, views, user, className, thumbnailUrl } = props.data;
    const { nickname } = user;

    return (
        <CardActionArea component={Link} to={TRoutes.GUIDE(id)}>
            <Card className={styles.card}>
                <Grid container spacing={2}>
                    <Grid item xl={3} lg={4} xs={12}>
                        <CardMedia
                            component="img"
                            className={styles.cardMedia}
                            height="160"
                            image={thumbnailUrl || "/static/tpl.jpg"}
                            title={"qwe"}
                        />
                    </Grid>
                    <Grid item xl={9} lg={8} xs={12}>
                        <div className={styles.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {title}
                                </Typography>
                                <Typography variant="subtitle1">
                                    Author: {nickname}
                                </Typography>
                            </CardContent>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </CardActionArea>
)
}