import React from 'react'
import ReactDom from 'react-dom'

class Card extends React.Component{
	render(){
		let design={
			fontStyle: 'italic',
			color: 'grey',
			textDecoration: 'line-through' 
		}
		return(
			<div>
				<h1 style={this.props.ob.checked?design:null}>{this.props.ob.name}</h1>
				<input type='checkbox'
				checked ={this.props.ob.checked}
				onChange={()=>{this.props.f(this.props.ob.name)}}
				></input>

			</div>
			)
	}
}
export default Card