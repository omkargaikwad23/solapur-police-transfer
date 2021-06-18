import "./App.css";
import PoliceStation from './Pages/PoliceStation/PoliceStation'
import Replaceable from './Pages/ReplaceableEmp/ReplaceableEmp'
import PoliceReport from './Pages/PoliceReport/PoliceReport'
import StationReport from './Pages/StationReport/StationReport'
import StationReportHtml from './Pages/StationReport/StationReportHtml'
import EmptyPosInfo from './Pages/EmptyPosInfo/EmptyPosInfo'
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Menu from './components/Navigation/Menu'
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        {/* <Menu/> */}
        <Switch>
          <Route exact path="/">
            <Replaceable />
          </Route>
          <Route exact path="/pol">
            <PoliceStation />
          </Route>
          <Route  exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/report">
            <PoliceReport/>
          </Route>
          {/* <Route exact path="/report2">
            <StationReport/>
          </Route> */}
          <Route exact path="/report2">
            <StationReportHtml/>
          </Route>
          <Route exact path="/emptyPos">
            <EmptyPosInfo/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
