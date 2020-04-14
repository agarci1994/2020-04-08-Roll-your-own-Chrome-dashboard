import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography  } from "@material-ui/core";


function Result({ Name, wTeaser, wUrl, yUrl, Type}) {
    const classes = useStyles();
    return (<>
        <Card className={classes.root}>
            <CardActionArea>
                {Type != "book" && Type !=  "author" && <CardMedia
                    component="iframe"
                    alt={Name}
                    height="240"
                    image={yUrl}
                    title={Name}
                />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {Name}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {wTeaser}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlined" color="primary" href={wUrl}>
                    More info
        </Button>
            </CardActions>
        </Card>
        </>
    );
}

const useStyles = makeStyles({
    root: {
        maxWidth: 445,
        margin: "10px"
    },
});

export default Result;

