import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MobileStepper from '@material-ui/core/MobileStepper';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  textField: {
    width: '100%',
  },
  nav: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  form: {
    padding: theme.spacing.unit * 2,
  },
  formWrapper: {
    marginTop: 56,
    marginBottom: 30,
    padding: 24,
  },
  avatar: {
    width: 80,
    height: 80,
  },
  selectSubs: {
    paddingTop: 8,
    textAlign: 'center',
  },
  header: {
    marginTop: 57,
  },
  list: {
    marginBottom: 50,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    marginTop: theme.spacing.unit,
  },
  selectCourse: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  }
});

const Topbar = (props) => (
  <AppBar position="static" color="default" style={{ backgroundColor: "#fff"}}>
    <Toolbar>
      <Typography variant="title" color="primary" className={props.classes.grow}>
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
);

class Register extends React.Component {
  state = {
    activeStep: 0,
    name: 'Gabriel Genê',
    cpf: '075.111.633.00',
    location: 'Rua número 0',
    state: 'Bahia',
    city: 'Salvador',
    area: '',
    culture: '',
    amount: '',
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleSubmit = () => {
    this.props.history.push('/progresso-cultura');
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  renderStep() {
    const { classes } = this.props;
    const {
      activeStep,
      name,
      cpf,
      location,
      state,
      city,
      area,
      culture,
      amount,
    } = this.state;


    if (activeStep === 0) {
      return (
        <div>
          <Topbar title="Cadastro" classes={classes} />
          <div className={classes.form}>
            <TextField
              id="outlined-with-placeholder"
              label="Nome"
              placeholder="Ex: Gabriel Genê"
              className={classes.textField}
              onChange={this.handleChange('name')}
              margin="normal"
              value={name}
            />
            <TextField
              id="outlined-with-placeholder"
              label="CPF"
              placeholder="Ex: 9999-9999"
              className={classes.textField}
              onChange={this.handleChange('cpf')}
              margin="normal"
              value={cpf}
            />
            <TextField
              id="outlined-with-placeholder"
              label="Endereço"
              placeholder="Ex: Rua número 0"
              className={classes.textField}
              onChange={this.handleChange('location')}
              margin="normal"
              value={location}
            />
            <TextField
              id="outlined-with-placeholder"
              label="Estado"
              placeholder="Ex: Bahia"
              className={classes.textField}
              onChange={this.handleChange('state')}
              margin="normal"
              value={state}
            />
            <TextField
              id="outlined-with-placeholder"
              label="Cidade"
              placeholder="Ex: Salvador"
              className={classes.textField}
              onChange={this.handleChange('city')}
              margin="normal"
              value={city}
            />
            <TextField
              id="outlined-with-placeholder"
              label="Area"
              placeholder="Ex: 420 m²"
              className={classes.textField}
              onChange={this.handleChange('area')}
              margin="normal"
              value={area}
            />
          </div>
        </div >
      )
    } else if (activeStep === 1) {
      return (
        <div>
          <Topbar title="Cadastro de culturas" classes={classes} />
          <div className={classes.form}>
            <TextField
              id="outlined-with-placeholder"
              label="Cultura"
              placeholder="Ex: Cebola, Cenoura"
              className={classes.textField}
              onChange={this.handleChange('culture')}
              margin="normal"
              value={culture}
            />
            <TextField
              id="outlined-with-placeholder"
              label="Quantidade"
              placeholder="Ex: 10 sacas ou 20 mudas"
              className={classes.textField}
              onChange={this.handleChange('amount')}
              margin="normal"
              value={amount}
            />
          </div>
        </div>
      )
    } else if (activeStep === 2) {
      return (
        <div>
          <Topbar title="Informações da sua região" classes={classes} />
        </div>
      )
    } else if (activeStep === 3) {
      return (
        <div>
          <Topbar title="Agricultura sintropica" classes={classes} />
        </div>
      )
    }
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const isFinalStep = activeStep === 3;

    return (
      <div>
        {this.renderStep()}
        <MobileStepper
          variant="dots"
          steps={4}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.nav}
          nextButton={
            <Button
              size="small"
              onClick={!isFinalStep ? this.handleNext : this.handleSubmit}
            >
              {isFinalStep ? 'Concluir' : 'Próximo'}
              <Icon> {isFinalStep ? 'keyboard_arrow_right' : 'keyboard_arrow_right'} </Icon>
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
              <Icon>keyboard_arrow_left</Icon>
              Voltar
            </Button>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Register);
