import React from "react";

import { withStyles } from "@material-ui/core/styles";



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
  render() {
    return (
      <div>
        <img src="https://i.imgur.com/lUEwPw1.png" alt="comentarios" style={{ width: 375 }} />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CultureView);
