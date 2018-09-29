import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Bottombar from './Bottombar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  toolbar: {
  },
  grow: {
    flexGrow: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  childrenWrapper: {
    marginBottom: 60,
    marginTop: 56,
  }
};

class Layout extends React.Component {
  state = {
    open: false,
  }

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { classes, menu, back, children, title, bottomBar } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="default"
          style={{ backgroundColor: "#fff"}}
        >
          <Toolbar style={styles.toolbar}>
            {
              menu &&
              <IconButton
                className={classes.menuButton}
                color="primary"
                aria-label="Menu"
                onClick={this.toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            }
            {
              back &&
              <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            }
            <Typography variant="title" color="primary" className={classes.grow}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          <h1>Menu</h1>
        </Drawer>
        <div style={styles.childrenWrapper}>
          {children}
        </div>
        {bottomBar && <Bottombar />}
      </div>
    );
  }
}



export default withStyles(styles)(Layout);
