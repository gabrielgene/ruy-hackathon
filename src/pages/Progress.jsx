import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardFruit from '../components/Card';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const InsetList = props => {
  const { classes } = props;
  const hardCodedList = [
    {
      link: "/cultura/cenoura",
      image: 'https://i.imgur.com/TC62vyy.png',
    },
    {
      link: "/cultura/cebola-roxa",
      image: 'https://i.imgur.com/JFPyLJM.png',
    },
    {
      link: "/cultura/banana",
      image: 'https://i.imgur.com/FoNmmpc.png',
    },
  ];
  return (
    <div style={styles.root} className={classes.root}>
      <List component="nav">
        {hardCodedList.map(item => (
          <ListItem key={item.image} button>
            <CardFruit
              onClick={item.onClick}
              link={item.link}
              image={item.image}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default withStyles(styles)(InsetList);
