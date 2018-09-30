import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 3,
    backgroudColor: 'green',
  },
  title: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 2,
    fontFamily: 'Jua',
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  },
  register: {
    cursor: 'pointer',
    marginTop: theme.spacing.unit * 12,
  },
  semear: {
    maxWidth: '89%',
    maxHeight: 84,
    marginBottom: 69,
    marginTop: 100,
  }
});

class Login extends Component {
  state = {
    user: 'teste',
    pass: '123',
    error: false,
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSubmit = () => {
    if (this.state.user === 'teste') {
      this.props.history.push('/cultura');
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img className={classes.semear} src="https://i.imgur.com/ZXH9gQk.png" alt="logo" />
        <TextField
          id="user"
          label="Usuário"
          autoComplete="off"
          placeholder="Ex: gabrielgene"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.user}
          fullWidth
          onChange={this.handleChange('user')}
          margin="normal"
        />
        <TextField
          id="pass"
          label="Senha"
          autoComplete="off"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Ex: ********"
          type="password"
          value={this.state.pass}
          fullWidth
          onChange={this.handleChange('pass')}
          margin="normal"
        />
        <Button
          className={classes.button}
          variant="raised"
          color="primary"
          fullWidth
          onClick={this.onSubmit}
          style={{ color: "#fff" }}
        >
          Entrar
        </Button>
        <Typography
          color="secondary"
          className={classes.register}
          variant="body2"
          onClick={() => this.props.history.push('/cadastro')}
        >
          Não possuo uma conta.
        </Typography>
        <Snackbar
          open={this.state.error}
          autoHideDuration={2000}
          onClose={this.handleClose}
          message={<span id="snackbar-fab-message-id">Usuario ou senha incorreta</span>}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Login);
