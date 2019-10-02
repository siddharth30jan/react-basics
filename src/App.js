import React from 'react';
//import Card from'./Card'

/*
let V=[{name: 'sid',checked :true},
{name: 'dis',checked :false},
{name: 's',checked :false},
{name: 'sd',checked :true},
{name: 'si',checked :false}]

class App extends React.Component{
  constructor(){
    super()
    this.state={
      ob: V
    }
    this.update=this.update.bind(this)
  }

  update(namee){

    let Z=V.map(x=>{
       if(x.name===namee){
        x.checked=!x.checked
       }
       return x;
      })

    this.setState(()=>{
      return{ob: Z
    }  
     })
    }

  

  
  render(){
    let X=this.state.ob.map(x=>{
      return(
        <Card ob={x} f={this.update}/>
      )
    })
    return(
    <div>
    {X}
    </div>
      )
    }
  }
/

/*
class App extends React.Component{
  constructor(){
    super()
    this.state={
      islogged: false
    }
  }

  render(){


    return(
      <div>
      {this.state.islogged?<div><h1>Logged In!</h1></div>:<div><h1>Please Log In</h1></div>}
      <button onClick={()=>{
        this.setState(prev=>{
          return{
            islogged: !prev.islogged 
          }
         
        })
      }}{this.state.islogged?'LOGOUT':'LOGIN'}</button>
      </div>
      )
  }
}
*/
/*
class App extends React.Component{
  constructor(){
    super()
    this.state={
      data: '',
      isloaded: false
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people/1')
    .then((x)=>x.json())
    .then((y)=>{
      this.setState(prev=>{
        return{
          data: y,
          isloaded: true
        }
      })
    })
  }

  render(){
    let display=this.state.isloaded?this.state.data.name:'LOADING!'
    return(
      <p>{display}</p>
      )
  }
}*/

class App extends React.Component{
  constructor(){
    super()
    this.state={
      firstname: '',
      lastname: ''
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
    <form>
      <input type='text' name='firstname' placeholder='FirstName' onChange={this.handleChange}></input>
      <input type='text' name='lastname' placeholder='LastName' onChange={this.handleChange}></input>
    </form>
    <h1>{this.state.firstname}  {this.state.lastname}</h1>
    </div>
    )
  }
}
export default App;
