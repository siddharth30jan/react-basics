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
		//console.log({"some": this.props})
		return(
	<div>
			    //It should only run on submitting but its not working like that!!
			<form onSubmit={this.props.ob(this.state.email,this.state.pass)}>
			<input type='text' placeholder='firstName' name='firstName' onChange={this.handleChange}></input>
           <input type='text' placeholder='lastName' name='lastName' onChange={this.handleChange}></input>
          <input type='email' placeholder='email' name='email' onChange={this.handleChange}></input>
           <input type='password' placeholder='password' name='pass' onChange={this.handleChange}></input>
           <input type='submit'></input>
          </form>
    </div>
			)
		
	}
}
export default SignUp