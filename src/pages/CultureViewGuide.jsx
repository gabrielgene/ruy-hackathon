import React from "react";

import Sound from 'react-sound';
import { withStyles } from "@material-ui/core/styles";
import Layout from '../components/Layout';
import CultureViewTabs from '../components/CultureViewTabs';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import CultureViewComments from './CultureViewComments';
import Animation from '../components/Anime';
import Icon from '@material-ui/core/Icon';


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

const matchFruit = fruit => {
  if (fruit.match(/cebola/g)) {
    return 'https://i.imgur.com/JFPyLJM.png';
  } else if(fruit === 'banana'){
    return 'https://i.imgur.com/Z7cn8Ew.png';
  } else if(fruit === 'cenoura'){
    return 'https://i.imgur.com/TC62vyy.png';
  }
}

class CultureView extends React.Component {
  state = {
    value: "one",
    checked: [0],
    playStatus: Sound.status.STOPPED,
    playing: false,
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
      playStatus: Sound.status.STOPPED,
    });
  };

  playSound = () => {
    console.log('play sound')
    this.setState({ playStatus: Sound.status.PLAYING })
  }

  stopPlaying = () => {
    this.setState({ playStatus: Sound.status.STOPPED })
  }

  render() {
    const { classes } = this.props;
    const { playStatus } = this.state;
    return (
      <List>
        <Sound
          url="https://s0.vocaroo.com/media/download_temp/Vocaroo_s0ZOCZP5SwCf.mp3"
          playStatus={playStatus}
          playFromPosition={300 /* in milliseconds */}
          onLoading={() => console.log('onloading')}
          // onPlaying={() => setPlaying(true)}
          onFinishedPlaying={this.stopPlaying}
        />
        <ListItem
          value={0}
          role={undefined}
          dense
          button
          className={classes.listItem}
          disableRipple
        >
          <Checkbox
            classes={{
              root: classes.checkbox,
              checked: classes.checked,
            }}
            checked={this.state.checked.indexOf(0) !== -1}
            tabIndex={-1}
            onClick={this.handleToggle(0)}
            disableRipple
          />
          <div className={classes.listItemDescription}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <h3 style={{ margin: '8px 0' }}>
                A escolha do local ideal
              </h3>
              <Icon
                style={this.state.playStatus === Sound.status.PLAYING ? {color: 'blue'} : null}
                onClick={this.playSound}
              > speaker_phone </Icon>
            </div>
            <span>
            Em primeiro lugar, para ter uma bananeira saudável, é preciso que você escolha um local com temperatura e umidade adequadas. Como você já leu no decorrer desse artigo, as bananas precisam de clima quente para se desenvolverem. Neste caso, o ideal seria entre 26 °C e 30 °C durante o dia e pelo menos 20 °C à noite.
          </span>
          </div>
        </ListItem>
        <ListItem
          value={1}
          role={undefined}
          dense
          button
          className={classes.listItem}
          disableRipple
        >
          <Checkbox
            classes={{
              root: classes.checkbox,
              checked: classes.checked,
            }}
            checked={this.state.checked.indexOf(1) !== -1}
            onClick={this.handleToggle(1)}
            tabIndex={-1}
            disableRipple
          />
          <div className={classes.listItemDescription}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <h3 style={{ margin: '8px 0' }}>
                Luz solar
              </h3>
              <Icon
                onClick={this.playSound}
                // style={this.state.playStatus === Sound.status.PLAYING ? {color: 'blue'} : null}
              >
                speaker_phone
              </Icon>
            </div>
            <span>
              O local para plantar bananas também precisa ser bem ensolarado, já que a bananeira precisa de pelo menos 12 horas de sol intenso todos os dias para crescer bem.
            </span>
          </div>
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CultureView);
