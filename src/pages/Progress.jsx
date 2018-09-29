import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: '100%',
  },
  progress:{
    background: 'red',
    marginVertical: 18,
  },
});

function InsetList(props) {
  const { classes } = props;
  const hardCodedList = [
    {
      name: "Tomate",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      progress: 35,
    },
    {
      name: "Cenoura",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      progress: 80,
    },
    {
      name: "Alface",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      progress: 5,
    },
  ];
  return (
    <div style={styles.root} className={classes.root}>
      <List component="nav">
        {hardCodedList.map(item => (
          <ListItem key={item.name} button>
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
                    <div style={{marginTop: 16}}>
                      <LinearProgress variant="determinate" value={item.progress} />
                    </div>
                  </CardContent>
                </CardActionArea>
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