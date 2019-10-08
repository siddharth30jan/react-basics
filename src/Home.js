import React from 'react'
import ReactDom from 'react-dom'
import { Row, Col ,Button} from 'antd'


class Home extends React.Component{
    render(){
        return(
            <div>
               <Row>
                    <Col span={5}><Button type="primary" href="/login">LOGIN</Button></Col>
                    <Col span={12}><Button type="primary" onClick={()=>{this.props.history.push('/signup')}}>SIGNUP</Button></Col>
                </Row>

            </div>
        )
    }
}

export default Home