import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './pages/Register';
import Topbar from './components/Topbar';
import StoreTelling from './pages/StoreTelling';
import registerServiceWorker from './registerServiceWorker';

const RegisterPage = () => (
  <Topbar title="Cadastro">
    <Register />
  </Topbar>
);

const CulturePage = () => (
  <Topbar title="Cultura">
    <Register />
  </Topbar>
);

const StoreTellingPage = () => (
  <Topbar title="Loja de João">
    <StoreTelling />
  </Topbar>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={RegisterPage} />
      <Route exact path="/cultura" component={CulturePage} />
      <Route exact path="/progresso-cultura" component={Register} />
      <Route exact path="/agricultores" component={Register} />
      <Route exact path="/loja" component={StoreTellingPage} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
