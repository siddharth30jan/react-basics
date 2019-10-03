import React from 'react';
import SignUp from'./SignUp'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      email: '',
      pass: '',
      signedIn: [],
      isLoggedin: false,
      isSignUp: true
    }
    this.handleChange=this.handleChange.bind(this)
     this.handleChange1=this.handleChange1.bind(this)
     this.handleChange2=this.handleChange2.bind(this)
     this.handleChange3=this.handleChange3.bind(this)
     this.handleChange4=this.handleChange4.bind(this)
  }


//HERE THE PROBLEM STARTS
  handleChange(z,c){
    /* event.preventDefault()
      const {name,value}=event.target;
    console.log(name + ' '+ value+' ' )*/
     /* return event => {
      event.preventDefault()
      let temp=this.state.signedIn
    console.log(typeof(temp))
    temp.push({email: z,pass: c})
    //this.setState({signedIn: temp})
   this.setState({isSignUp: false})
    }*/
     let temp=this.state.signedIn
    console.log(typeof(temp))
    temp.push({email: z,pass: c})
    this.setState({signedIn: temp})
   this.setState({isSignUp: false})
       
  }

//SignUp
  handleChange1(){
    console.log("jflsfjsjf")
    this.setState({isSignUp: true})
  }


  

  //logout
  handleChange2(event){
    this.setState({isLoggedin: false})
  }
  //login
   handleChange3(event){
    let x
    for(x of this.state.signedIn){
      if(x.email===this.state.email&&x.pass===this.state.pass){
        //succesfully authenticated!
        this.setState({isLoggedin: true})
      }
    }

    alert("Invalid credentials or not signed in!")
    
  }

//update login window
  handleChange4(event){
    const {name,value}=event.target;// Good practice, rather than doing event.target.name: event.target.value
    console.log(name + ' '+ value+' ' + event.target.value)
    this.setState({[name]: value})

  }

  render(){
    if(this.state.isLoggedin){
      return(
        <div>
        <button onClick={this.handleChange2}>LOGOUT!</button>
        </div>
        )
    }else{
      //either signup or login
      if(this.state.isSignUp){
         return(
        <div>
       <SignUp ob={this.handleChange}/>
        </div>
        )
      }else{
        //login
        console.log(this.state.signedIn)
        return(
          <div>
          <form onSubmit={this.handleChange3}>
          <input type='email' placeholder='email' name='email' onChange={this.handleChange4}></input>
           <input type='password' placeholder='password' name='pass' onChange={this.handleChange4}></input>
           <input type='submit'></input>
          </form>
          <div>
          <button onCLick={this.handleChange1}>SIGNUP!</button>
          </div>
          </div>
          )
      }




    }
  }
}
export default App;
