import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import PropTypes from "prop-types";

import ClassAvatar from "modules/guides/components/ClassAvatar/ClassAvatar";

import styles from "./DetailsHeader.module.scss";

function DetailsHeader({guide}) {
    const { title, className, views, user } = guide;

    return (
        <Box className={styles.header}>
            <ClassAvatar title={className} folder="classes" name={className} />

            <Typography component="h1" variant="h4" color="secondary" className={styles.title}>
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