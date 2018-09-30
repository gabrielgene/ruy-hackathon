import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top:200,
    left:50,
    right:0,
    width: '56%',
    height: 200,
    borderRadius: 8,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    border: 'none',
  },
  title:{
    marginTop: -10,
  },
  loader: {
    width: '80%',
    height: 150,
  }
});

class MyStore extends Component {
  state = {
    renderThat: true,
  }
  render() {
    const { classes } = this.props;
    const { renderThat } = this.state;
    setTimeout(() => {
      this.setState({renderThat:false})
    }, 3800);
    return (
      <div>
        <h1>Minha loja</h1>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={renderThat}
        >
          <div className={classes.paper}>
            <h2 className={classes.title}>Carregando Informações</h2>
            <img className={classes.loader} src="https://i.imgur.com/dgDIOKt.gif" alt="loading" />
          </div>
        </Modal>
        {/* {renderThat && <p>Migué!</p>} */}
      </div>
    )
  }
}

export default withStyles(styles)(MyStore);