import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import CardFruit from '../components/Card';
import TextField from '@material-ui/core/TextField';


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
  }
});


const hardCodedObj = {
  cenoura: {
    image: 'https://i.imgur.com/KBSUF5G.png',
  },
  cebolaroxa: {
    image: 'https://i.imgur.com/uKyux5S.png',
  },
  banana: {
    image: 'https://i.imgur.com/yCgdnp6.png',
  },
};

class CultureAdd extends Component {
  state = {
    culture: '',
    amount: '',
    cultureList: [],
  };
  onAdd = () => {
    const { cultureList, culture } = this.state;
    let cultureItem;
    if (culture.match(/banana/g)) {
      cultureItem = hardCodedObj.banana;
    } else if (culture.match(/cebola/g)) {
      cultureItem = hardCodedObj.cebolaroxa;
    } else if (culture.match(/cenoura/g)) {
      cultureItem = hardCodedObj.cenoura;
    }

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

  handleSubmit = () => {
    this.props.history.push('/cultura');
  };

  render() {
    const { classes } = this.props;
    const { cultureList, culture } = this.state;

    return (
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
    )
  }
}

const routerCultureAdd = withRouter(CultureAdd);

export default withStyles(styles)(routerCultureAdd);
