import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import StoreAnime from '../components/StoreAnime';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: 200,
    left: 50,
    right: 0,
    width: '56%',
    height: 200,
    borderRadius: 8,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    border: 'none',
  },
  wrapper: {
    marginTop: 257,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3,
  },
  loader: {
    width: '80%',
    height: 150,
  }
});

class MyStore extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { loading } = this.state;
    const { classes } = this.props;
    console.log(loading)
    if (loading) {
      return (
        <div>
          <div className={classes.wrapper} >
            <Typography variant="title" gutterBottom className={classes.text}>
              Estamos preparando a sua loja para você...
            </Typography>
            <CircularProgress className={classes.progress} size={50} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <StoreAnime />
        </div>
      );
    };
  }
}

export default withStyles(styles)(MyStore);
