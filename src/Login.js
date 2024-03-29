import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
import 'tachyons'
import ReactDom from 'react-dom'

class NormalLoginForm extends React.Component{
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
        const { getFieldDecorator } = this.props.form;
    return (
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <Form  className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              name="email"
              onChange={(e)=>this.handleChange(e)}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              name="pass"
              onChange={(e)=>this.handleChange(e)}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
         
           <a href="/signup">Sign Up!</a>
        </Form.Item>
      </Form>
      </article>
    )
  }
}
const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);


      
export default Login;
