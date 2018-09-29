import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Register from './pages/Register';
import Topbar from './components/Topbar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: pink,
  },
});

const CulturePage = () => (
  <Topbar menu title="Cultura">
    <h1>Cultura</h1>
  </Topbar>
);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/cultura" component={CulturePage} />
        <Route exact path="/progresso-cultura" component={Register} />
        <Route exact path="/agricultores" component={Register} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
