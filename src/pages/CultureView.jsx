import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Layout from '../components/Layout';
import CultureViewTabs from '../components/CultureViewTabs';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import CultureViewComments from './CultureViewComments';
import Animation from '../components/Anime';
import CultureViewGuide from './CultureViewGuide';



const styles = theme => ({
  root: {
    marginTop: 105,
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

const matchFruit = fruit => {
  if (fruit.match(/cebola/g)) {
    return 'https://i.imgur.com/LvTH17H.png';
  } else if (fruit === 'banana') {
    return 'https://i.imgur.com/gEa7RSS.png';
  } else if (fruit === 'cenoura') {
    return 'https://i.imgur.com/iYvuVDf.png';
  }
}

class CultureView extends React.Component {
  state = {
    value: "one",
    checked: [0],
  };

  handleChange = (event, value) => {
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
    const title =
      this.props.location.pathname.replace('/cultura/', '');
    const fruitImage = matchFruit(title);
    return (
      <Layout
        title={title.charAt(0).toUpperCase() + title.slice(1)}
        back={() => this.props.history.push("/cultura")}
        tabBar={<CultureViewTabs value={value} handleChange={this.handleChange} />}
      >
        <div className={classes.root}>
          <img src={fruitImage} alt="bli" style={{ width: '100%', minHeight: 139 }} />
          {value === "one" &&
          <CultureViewGuide />
          }
          {value === "two" &&
            <div>
              <Animation />
              <div style={{textAlign: 'center', marginTop: 125,}}>
                <h3>Compatíveis</h3>
                <img style={{height: 80}} src="https://i.imgur.com/VxChHua.png" />
              </div>
              <div style={{textAlign: 'center'}}>
                <h3>Não Compatíveis</h3>
                <img style={{height: 80}} src="https://i.imgur.com/atGzOfc.png" />
              </div>
            </div>
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
