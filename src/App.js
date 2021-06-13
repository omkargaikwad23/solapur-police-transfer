import "./App.css";
import PoliceStation from './Pages/PoliceStation/PoliceStation'
import Replaceable from './Pages/ReplaceableEmp/ReplaceableEmp'
import Navigation from './components/Navigation/Navigation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
      <Route exact path="/">
      <Replaceable />
      </Route>
      <Route exact path="/pol">
      <PoliceStation />
      </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
