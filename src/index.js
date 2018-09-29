import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './pages/Register';
import Progress from './pages/Progress';
import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';

const RegisterPage = props => (
  <Layout title="Cadastro">
    <Register {...props} />
  </Layout>
);

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
  <Router>
    <Switch>
      <Route exact path="/" component={RegisterPage} />
      <Route exact path="/cultura" component={CultureListPage} />
      <Route exact path="/cultura/:cultureName" component={CultureViewPage} />
      <Route exact path="/progresso-cultura" component={ProgressPage} />
      <Route exact path="/agricultores" component={Register} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
