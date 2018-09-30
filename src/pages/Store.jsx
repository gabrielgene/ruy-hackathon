import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: "#f5f5f5",
  },
});

const Store = ({ classes }) => (
  <div>
    <Paper className={classes.root} elevation={1}>
      <h1>Aqui</h1>
    </Paper>
  </div>
);

export default withStyles(styles)(Store);
