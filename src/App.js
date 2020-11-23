import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers/history';
import { PrivateRoute } from './components/PrivateRoute';
import  HomePage  from './components/HomePage/HomePage';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <Router history={history}>
        <Switch>
            <PrivateRoute exact path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            {/* <Route path="/register" component={RegisterPage} /> */}
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
  );
}

export default App;
