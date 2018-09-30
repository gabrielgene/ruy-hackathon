import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import FlowerIcon from '@material-ui/icons/LocalFloristOutlined';
import { withRouter } from "react-router-dom";

const styles = {
  root: {
    width: '100%',
    backgroundColor: 'white',
    position: 'fixed',
    bottom: 0,
    border: 'solid 1px #f2f2f2'
  },
};

// #notProudAboutThat
class BottomBar extends React.Component {
  state = {
    value: parseInt(localStorage.getItem('value'), 10),
  };

  handleChange = (event, value) => {
    localStorage.setItem('value', value);
    const gambiarra = localStorage.getItem('value');
    switch (gambiarra) {
      case '0':
        this.props.history.push('/cultura');
        break;
      case '1':
        this.props.history.push('/loja');
        break;
      default:
        break;
    }
    return;
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
        <BottomNavigationAction label="Principal" icon={<HomeIcon />} />
        <BottomNavigationAction label="Cultura" icon={<FlowerIcon />} />
      </BottomNavigation>
    );
  }
}

const BottomBarWithRouter = withRouter(BottomBar);

export default withStyles(styles)(BottomBarWithRouter);
