import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import PropTypes from "prop-types";

import ClassAvatar from "modules/guides/components/ClassAvatar/ClassAvatar";

import styles from "./DetailsHeader.module.scss";

function DetailsHeader({guide}) {
    const { title, className, views, user } = guide;

    return (
        <Box className={styles.root} style={{
            backgroundImage: "url('/static/banner.jpg')"
        }}>
            <div className={styles.wrapper}>
                <ClassAvatar title={className} folder="classes" name={className} />

                <Typography component="h1" variant="h3" color="secondary" className={styles.title}>
                    {title}
                </Typography>

                {user
                    ? (
                        <>
                            <div className={styles.author}>
                                Автор: <span>{user.nickname}</span>
                            </div>
                            <div className={styles.views}>
                                <Visibility/> <span>{views}</span>
                            </div>
                        </>
                    )
                    : ''
                }
            </div>
        </Box>
    )
}

DetailsHeader.propTypes = {
    guide: PropTypes.shape({
        title: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        user: PropTypes.shape({
            nickname: PropTypes.string.isRequired
        })
    })
}

export default DetailsHeader;