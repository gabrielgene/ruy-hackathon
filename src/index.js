import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Register from './pages/Register';
import Login from './pages/Login';
import Progress from './pages/Progress';
import Store from './pages/Store';
import CultureView from './pages/CultureView';
import MyStore from './pages/MyStore';
import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: pink,
  },
});

const ProgressPage = (props) => (
  <Layout title="Minhas Culturas" bottomBar menu {...props}>
    <Progress />
  </Layout>
);

const StorePage = (props) => (
  <Layout title="Loja" bottomBar menu>
    <Store {...props} />
  </Layout>
);

const MyStorePage = ({ history }) => (
  <Layout title="Minha loja" back={() => history.goBack()}>
    <MyStore />
  </Layout>
);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/cultura" component={ProgressPage} />
        <Route exact path="/cultura/:cultureName" component={CultureView} />
        <Route exact path="/loja" component={StorePage} />
        <Route exact path="/minha-loja" component={MyStorePage} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
