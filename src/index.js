import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Register from './pages/Register';
import Progress from './pages/Progress';
import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: pink,
  },
});

const ProgressPage = () => (
  <Layout title="Progresso da Cultura" bottomBar menu>
    <Progress />
  </Layout>
);

const CultureListPage = () => (
  <Layout title="Cultura" bottomBar>
    <h1>List</h1>
  </Layout>
);

const CultureViewPage = () => (
  <Layout title="Cultura" back>
    <h1>Ravi</h1>
  </Layout>
);

const App = () => (
  <MuiThemeProvider theme={theme}>
  <Router>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/cultura" component={CultureListPage} />
      <Route exact path="/cultura/:cultureName" component={CultureViewPage} />
      <Route exact path="/progresso-cultura" component={ProgressPage} />
      <Route exact path="/agricultores" component={Register} />
    </Switch>
  </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
