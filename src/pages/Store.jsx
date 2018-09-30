import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import StoreIcon from '@material-ui/icons/Store';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    backgroundColor: '#f5f5f5',
    width: 118,
    height: 190,
  },
  store: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: 70,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const PaperCard = ({ classes }) => (
  <Paper className={classes.root} elevation={1}>
    <h1>Aqui</h1>
  </Paper>
);

const Store = ({ classes }) => (
  <div className={classes.store}>
    <PaperCard classes={classes} />
    <PaperCard classes={classes} />
    <PaperCard classes={classes} />
    <PaperCard classes={classes} />
    <PaperCard classes={classes} />
    <PaperCard classes={classes} />
    <Button
      id="btn"
      variant="extendedFab"
      color="primary"
      aria-label="Store"
      className={classes.button}
      style={{ color: "#fff" }}
    >
      <StoreIcon className={classes.extendedIcon} />
      Criar minha loja
      </Button>
  </div>
);

export default withStyles(styles)(Store);
