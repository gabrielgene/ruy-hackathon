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

const CultureViewPage = () => (
  <Layout title="Cultura" back>
    <h1>Ravi</h1>
  </Layout>
);

const StorePage = () => (
  <Layout title="Loja" bottomBar menu>
    <Store />
  </Layout>
);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/cultura" component={ProgressPage} />
        <Route exact path="/cultura/:cultureName" component={CultureViewPage} />
        <Route exact path="/loja" component={StorePage} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
