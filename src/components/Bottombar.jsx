import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShopIcon from '@material-ui/icons/ShoppingBasketOutlined';
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
  constructor(props) {
    super(props);
    this.state = {
      value: props.location.pathname === '/loja' ? 1 : 0,
    };
  }

  handleChange = (event, value) => {
    this.props.history.push(value === 1 ? '/loja' : '/cultura');
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
        <BottomNavigationAction label="Cultura" icon={<FlowerIcon />} />
        <BottomNavigationAction label="Loja" icon={<ShopIcon />} />
      </BottomNavigation>
    );
  }
}

const BottomBarWithRouter = withRouter(BottomBar);

export default withStyles(styles)(BottomBarWithRouter);
