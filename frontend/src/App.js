import './App.css';
import "antd/dist/antd.css";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Assets from './components/Assets';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  //logout = setJwt(null)
  const [jwt, setJwt] = useState(null);
  const [mail, setMail] = useState("");
  console.log('reload');
  return (
    <Router>
      <div>
      <Navbar text = 'Navbar, User:' mail={mail}/>
      <>
        {jwt ? 
        //logged in 
        <Switch>
        <Route path="/login">
          <Redirect to='/'/>
        </Route>
        <Route path="/logout" component={()=> {setJwt(null); return <Redirect to='/' />}}>
        </Route>
        <Route path="/assets">
          <Assets jwt={jwt}/>
        </Route>
        </Switch>
        : 
        //not logged in 
        <Switch>
        <Route path="/login">
          <Login setJwt = {setJwt} setMail = {setMail}/>
        </Route>
        </Switch>}
        
      </>
      </div>
    </Router>
  );
}

export default App;
