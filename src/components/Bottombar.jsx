import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: '100%',
    backgroundColor: 'white',
    position: 'fixed',
    bottom: 0,
    border: 'solid 1px #f2f2f2'
  },
};

class BottomBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Principal" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Cultura" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Mercado" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(BottomBar);
