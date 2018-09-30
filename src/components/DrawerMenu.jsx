import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import FaceIcon from '@material-ui/icons/Face';
import CopyIcon from '@material-ui/icons/Copyright';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from "react-router-dom";

const styles = {
  drawer: {
    width: 250,
  }
};

class DrawerMenu extends Component {
  onExit = () => {
    this.props.history.push('/');
  }

  onSaibaMais = () => this.props.history.push('/saiba-mais');

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.drawer}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ color: "#fff" }}>
              Semear
            </Typography>
          </Toolbar>
        </AppBar>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Adicionar Cultura" />
          </ListItem>
          <ListItem button onClick={this.onSaibaMais}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Saiba mais" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <CopyIcon />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItem>
          <ListItem button onClick={this.onExit}>
            <ListItemIcon>
              <ExitIcon />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </List>
      </div>
    )
  }
}

const DrawerWithRouter = withRouter(DrawerMenu);

export default withStyles(styles)(DrawerWithRouter);
