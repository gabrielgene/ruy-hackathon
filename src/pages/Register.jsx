import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MobileStepper from '@material-ui/core/MobileStepper';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import CardFruit from '../components/Card';

const hardCodedObj = {
  cenoura: {
    image: 'https://i.imgur.com/8g4aqRu.png',
  },
  cebolaroxa: {
    image: 'https://i.imgur.com/dLXdWrd.png',
  },
  banana: {
    image: 'https://i.imgur.com/8rYX23y.png',
  },
};

const hardList = [
  {
    image: ' https://i.imgur.com/SJMF1Fo.png ',
  },
  {
    image: 'https://i.imgur.com/7JbfriU.png',
  },
  {
    image: 'https://i.imgur.com/8g4aqRu.png',
  },
  {
    image: 'https://i.imgur.com/dLXdWrd.png',
  },
  {
    image: 'https://i.imgur.com/8rYX23y.png',
  },
  {
    image: 'https://i.imgur.com/pw6EF2t.png',
  },
];

const styles = theme => ({
  textField: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
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
    marginTop: 56,
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
  },
  after: {
    marginTop: 57,
    textAlign: 'center',
  },
});

const Topbar = (props) => (
  <AppBar position="fixed" color="default" style={{ backgroundColor: "#fff" }}>
    <Toolbar>
      <Typography variant="title" color="primary" className={props.classes.grow}>
        {props.title}
      </Typography>
      <Button color="primary" onClick={() => props.history.push('/')}>Entrar</Button>
    </Toolbar>
  </AppBar>
);

class Register extends React.Component {
  state = {
    activeStep: 0,
    name: '',
    cpf: '',
    location: 'R. Desdêmonas, 10-124 - Rio Vermelho',
    state: 'Bahia',
    city: 'Salvador',
    area: '',
    culture: '',
    amount: '',
    cultureList: [],
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
    this.props.history.push('/cultura');
  };

  onAdd = () => {
    const { cultureList, culture } = this.state;
    let cultureItem;
    if (culture === 'banana') {
      cultureItem = hardCodedObj.banana;
    } else if (culture === 'cebola') {
      cultureItem = hardCodedObj.cebolaroxa;
    } else if (culture === 'cenoura') {
      cultureItem = hardCodedObj.cenoura;
    }
    else{ return; }

    this.setState({
      cultureList: [...cultureList, cultureItem],
      culture: '',
      amount: '',
    });
  };

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
      cultureList,
    } = this.state;


    if (activeStep === 0) {
      return (
        <div>
          <Topbar title="Cadastro" classes={classes} {...this.props} />
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
              label="Cidade"
              placeholder="Ex: Salvador"
              className={classes.textField}
              onChange={this.handleChange('city')}
              margin="normal"
              value={city}
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
          <Topbar title="Cadastro de Culturas" classes={classes} {...this.props} />
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
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={this.onAdd}
            >
              Adicionar
            </Button>
            <List component="nav">
              {cultureList.map(({ image }) => (
                <ListItem key={image} button>
                  <CardFruit
                    image={image}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      )
    } else if (activeStep === 2) {
      return (
        <div>
          <Topbar title="Informações da sua região" classes={classes} {...this.props} />
          <img
            alt="map"
            src="https://i.imgur.com/TN1IK7F.jpg"
            style={{ width: '100%', marginTop: 56, height: 175 }}
          />
          <List component="nav" style={{ marginBottom: 56 }}>
            {hardList.map(({ image }) => (
              <ListItem key={image} button>
                <CardFruit
                  link={''}
                  image={image}
                />
              </ListItem>
            ))}
          </List>
        </div>
      )
    } else if (activeStep === 3) {
      return (
        <div>
          <Topbar title="Sobre Você" classes={classes} {...this.props} />
          <div className={classes.form}>
            <TextField
              label="Conte nos um pouco mais sobre você ;)"
              className={classes.textField}
              margin="normal"
              multiline
              rowsMax="4"
              id="standard-multiline-static"
            />
            <div className={classes.after}>
              <Typography
                color="primary"
                variant="body2"
                onClick={this.handleNext}
              >
                Contar depois.
              </Typography>
            </div>
          </div>
        </div>
      )
    } else if (activeStep === 4) {
      return (
        <div>
          <Topbar title="Agricultura Sintrópica" classes={classes} {...this.props} />
          <img
            alt="map"
            src="https://i.imgur.com/CdHtX7L.png"
            style={{ width: '100%', height: 646 }}
          />
        </div>
      )
    }
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const isFinalStep = activeStep === 4;

    return (
      <div>
        {this.renderStep()}
        <MobileStepper
          variant="dots"
          steps={5}
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
