import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Layout from '../components/Layout';
import CultureViewTabs from '../components/CultureViewTabs';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import CultureViewComments from './CultureViewComments';



const styles = theme => ({
  root: {
    // topbar + tabbar
    marginTop: 128,
  },
  listItemDescription: {
    display: 'flex',
    flexDirection: 'column',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
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
    value: "one",
    checked: [0],
  };

  handleChange = (event, value) => {
    console.log('value')
    this.setState({ value });
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(this.props.location);
    const title =
      this.props.location.pathname.replace('/cultura/', '');

    return (
      <Layout
        title={title.charAt(0).toUpperCase() + title.slice(1)}
        back={() => this.props.history.push("/cultura")}
        tabBar={<CultureViewTabs value={value} handleChange={this.handleChange} />}
      >
        <div className={classes.root}>
          <img src="https://i.imgur.com/Z7cn8Ew.png" style={{ width: '100%' }} />
          {value === "one" &&
            <List>
            {[0, 1, 2, 3].map(value => (
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                onClick={this.handleToggle(value)}
                className={classes.listItem}
              >
                <Checkbox
                  classes={{
                    root: classes.checkbox,
                    checked: classes.checked,
                  }}
                  checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <div className={classes.listItemDescription}>
                  <h3 style={{ margin: '8px 0' }}> What is Lorem Ipsum? </h3>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  </span>
                </div>
                {/* <ListItemText primary={`Line item ${value + 1}`} /> */}
              </ListItem>
            ))}
          </List>
          }
          {value === "two" &&
            <h1>Item Two</h1>
          }
          {value === "three" &&
            <CultureViewComments />
          }
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CultureView);
