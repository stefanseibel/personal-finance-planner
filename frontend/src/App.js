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
import Signup from './components/Signup';
import HomeLoggedIn from './components/HomeLoggedIn';
import HomeLoggedOut from './components/HomeLoggedOut';

function App() {
  //logout = setJwt(null)
  const [jwt, setJwt] = useState(null);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("")

    console.log('reload');
  return (
    <Router>
      <div>
      <Navbar jwt={jwt} mail={mail}/>
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
        <Route exact path="/">
          <HomeLoggedIn name={name}/>
        </Route>
        <Route path="/">
          <Redirect to='/' />
        </Route>
        </Switch>
        : 
        //not logged in 
        <Switch>
        <Route path="/login">
          <Login setJwt = {setJwt} setMail = {setMail} setName = {setName}/>
        </Route>
        <Route path="/signup">
          <Signup setJwt = {setJwt} setMail = {setMail} setName = {setName}/>
        </Route>
        <Route exact path="/">
          <HomeLoggedOut />
        </Route>
        <Route path="/">
          <Redirect to='/' />
        </Route>
        </Switch>}
        
      </>
      </div>
    </Router>
  );
}

export default App;
