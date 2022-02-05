import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavContainer from './components/NavContainer/NavContainer';
import Home from './components/Home/Home';
import Employee from './components/Employee/Employee';

import NotFound from './components/NotFound/NotFound';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';

function App() {
  return (
    <div className="App">
      
      <Router>
         <NavContainer></NavContainer>
         <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/users">
                <Employee></Employee>
            </Route>
            <Route exact path="/users/:id">
                <EmployeeDetails></EmployeeDetails>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
