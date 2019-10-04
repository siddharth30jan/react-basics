import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from './Login'
import SignUp from'./SignUp'
import {createBrowserHistory} from "history"


const history= createBrowserHistory()

class App extends React.Component{
  constructor(){
    super()
    this.state={
      email: '',
      pass: '',
    }
  }

  render(){
    //console.log(this.state)
    return(
      <BrowserRouter >
      <Route path="/login" component={Login}>
            
      </Route>

       <Route path="/signup" component={SignUp}>
        <SignUp />
      </Route>

    </BrowserRouter>
      )
    
  }
}
export default App;
