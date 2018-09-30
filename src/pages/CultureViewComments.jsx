import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';



const styles = theme => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
    // border: 'solid #4caf50'
  },
  checkbox: {
    color: '#4caf50',
    '&$checked': {
      color: '#4caf50',
    },
  },
  checked: {},
});

class CultureView extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent style={{ display: 'flex', 'padding-bottom': '0px' }}>
              <Avatar
                alt="Adelle Charles"
                src="https://avatars3.githubusercontent.com/u/719755?s=400&v=4"
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          {/* <IconButton aria-label="next" style={ this.state.checked ? { color: '#4caf50' } : {}} onClick={this.handleChange}>
            <Icon>{this.state.checked ? 'favorite' : 'favorite_outline'}</Icon>
          </IconButton> */}
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent style={{ display: 'flex', 'padding-bottom': '0px' }}>
              <Avatar
                alt="Adelle Charles"
                src="https://avatars3.githubusercontent.com/u/1201847?s=460&v=4"
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          {/* <IconButton aria-label="next" style={ this.state.checked ? { color: '#4caf50' } : {}} onClick={this.handleChange}>
            <Icon>{this.state.checked ? 'favorite' : 'favorite_outline'}</Icon>
          </IconButton> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CultureView);
