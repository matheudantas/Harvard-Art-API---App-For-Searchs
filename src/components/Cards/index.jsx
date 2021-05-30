import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getClassificationThunk } from "../../store/art/thunk";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import notImagesFound from "../../assets/images/notImagesFound.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    minWidth: 300,
    width: 400,
    margin: 10,
  },
  media: {
    height: 280,
  },
});

const Cards = () => {
  const classes = useStyles();
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  const url = useSelector((state) => state.art.nextURLClassification);
  const imageClassification = useSelector(
    (state) => state.art.imgClassification
  );

  useEffect(() => {
    dispatch(getClassificationThunk(url, setLoad));
  }, [dispatch, url]);

  return (
    <>
      {load &&
        imageClassification[0]?.map((i) => (
          <Card className={classes.root}>
            <CardActionArea href={i.url} target="_blank" rel="noopener">
              <CardMedia
                className={classes.media}
                image={i?.primaryimageurl ? i.primaryimageurl : notImagesFound}
                title={i.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  {i.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h3">
                  {i.period}
                </Typography>
                <Typography variant="subtitle2" component="p">
                  {i.medium}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {i.description}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  Classification: {i.classification}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href={i.url}
                target="_blank"
                rel="noopener"
                size="small"
                color="primary"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
    </>
  );
};

export default Cards;
