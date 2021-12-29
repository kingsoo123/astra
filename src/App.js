import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import DashComponent from "./views/DashComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard" component={DashComponent} />
          <Route path="/settings" component={DashComponent} />
          <Route path="/loans" component={DashComponent}/>
          <Route exact path="/" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
