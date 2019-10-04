import React from 'react'
import ReactDom from 'react-dom'

class SignUp extends React.Component{
	constructor(){
		super()
		this.state={
			firstName: '',
			lastName: '',
			email: '',
			pass: ''
		}
	}

	handleChange(event){
     const {name,value}=event.target;// Good practice, rather than doing event.target.name: event.target.value
    console.log(name + ' '+ value+' ' + event.target.value)
    this.setState({[name]: value})
  }
  

	render(){
		return(
	<div>
			    //It should only run on submitting but its not working like that!!
			<form onSubmit={()=>this.props.ob(this.state.email,this.state.pass)}>
			<input type='text' placeholder='firstName' name='firstName' onChange={(e)=>this.handleChange(e)}></input>
           <input type='text' placeholder='lastName' name='lastName' onChange={(e)=>this.handleChange(e)}></input>
          <input type='email' placeholder='email' name='email' onChange={(e)=>this.handleChange(e)}></input>
           <input type='password' placeholder='password' name='pass' onChange={(e)=>this.handleChange(e)}></input>
           <input type='submit'></input>
          </form>
    </div>
			)
		
	}
}
export default SignUp