import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import FlowerIcon from '@material-ui/icons/LocalFloristOutlined';
import ShoppingIcon from '@material-ui/icons/ShoppingBasketOutlined';
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

class BottomBar extends React.Component {
  state = {
    value: 0,
  };

  setRouteState = value => {
    const { pathname } = this.props.location;
    const newValue = value || pathname;
    switch (newValue) {
      case 0:
        this.props.history.push('/cultura');
        return value;
      case 1:
        this.props.history.push('/cadastro');
        return value;
      case 1:
        this.props.history.push('/agricultores');
        return value;
      case '/cultura':
        this.setState({ value: 0 });
        break;
      case '/cadastro':
        this.setState({ value: 1 });
        break;
      case '/agricultures':
        this.setState({ value: 2 });
        break;
      default:
        this.setState({ value: 0 });
        break;
      }
    return;
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.setRouteState(value);
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
        <BottomNavigationAction label="Mercado" icon={<ShoppingIcon />} />
      </BottomNavigation>
    );
  }
}

const BottomBarWithRouter = withRouter(BottomBar);

export default withStyles(styles)(BottomBarWithRouter);
