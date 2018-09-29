import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: '100%',
  },
});

function InsetList(props) {
  const { classes } = props;
  console.log(props)
  const hardCodedList = [
    {
      name: "Tomate",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Cenoura",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Alface",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ];
  return (
    <div style={styles.root} className={classes.root}>
      <List component="nav">
        {hardCodedList.map(item => (
          <ListItem button>
            <Card className={classes.card}>
              <Link style={{ textDecoration: 'none' }} to="/">
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      {item.name}
                    </Typography>
                    <Typography component="p">
                      {item.text}
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
              </Link>
            </Card>
            </ListItem>
        ))}
      </List>
    </div>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetList);