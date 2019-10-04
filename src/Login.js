import React from 'react';
import ReactDom from 'react-dom'

class Login extends React.Component{
  constructor(){
    super()
    this.state={
      email: '',
      pass: '',
    }
  }

//update login window
  handleChange(event){
    const {name,value}=event.target;// Good practice, rather than doing event.target.name: event.target.value
    console.log(name + ' '+ value+' ' + event.target.value)
    this.setState({[name]: value})

  }
  handleChange1(){
    this.props.history.push('/signup')
  }

  render(){
    return(
      <div>
        <form onSubmit={()=>this.handleChange1()}>
          <input type='email' placeholder='email' name='email' onChange={(e)=>this.handleChange(e)}></input>
           <input type='password' placeholder='password' name='pass' onChange={(e)=>this.handleChange(e)}></input>
           <input type='submit'></input>
          </form>
          <div>
          <button type="submit" value="SignUp" onClick={()=>this.handleChange1()}>Sign up</button>
          </div>
      </div>
      )

    
  }
}
export default Login;
