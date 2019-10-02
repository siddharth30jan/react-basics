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
		 this.handleChange=this.handleChange.bind(this)
	}

	handleChange(event){
     const {name,value}=event.target;// Good practice, rather than doing event.target.name: event.target.value
    console.log(name + ' '+ value+' ' + event.target.value)
    this.setState({[name]: value})
  }

	render(){
		return(
			<div>
    <form onSubmit={this.props.handleChange(this.state.firstName,this.state.lastName,this.state.email,this.state.pass)}>
      <input type='text' name='firstName' placeholder='FirstName' onChange={this.handleChange}></input>
      <input type='text' name='lastName' placeholder='LastName' onChange={this.handleChange}></input>
      <input type='email' name='email' placeholder='email' onChange={this.handleChange}></input>
      <input type='password' name='pass' placeholder='password' onChange={this.handleChange}></input>
      <input type="submit">SUBMIT</input>
    </form>
    </div>
			)
		
	}
}
export default SignUp