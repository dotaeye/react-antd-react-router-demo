import React, {Component} from 'react';
import {Row,Col} from 'antd';
import "antd/dist/antd.css";
import {NavLink,Link} from 'react-router-dom'

import './Home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
        }
    }

    hanleChange(){
        this.setState({
            input:this.input2.value,
        })
    }
    render() {

        return (
            <div>
                <h2>从about中传入的值为：{this.props.match.params.id }</h2>
               <Row>
                   <Col sm={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 2 }} className='box'>
                       <input type='text' placeholder='输入需要传入的数据' ref={input=>{this.input2 = input}} onInput={this.hanleChange.bind(this)}/>
                       <NavLink to={`/about/${this.state.input}`}>about</NavLink>
                   </Col>
                   <Col sm={{ span: 0, offset: 1 }} lg={{ span: 6, offset: 2 }} xs={{span:0}} className='box'>
                       <NavLink to={`/about/${this.state.input}`}>about</NavLink>
                   </Col>
                   <Col sm={{ span: 0, offset: 1 }} lg={{ span: 6, offset: 2 }}  xs={{span:0}}  className='box'>
                       <NavLink to={`/about/${this.state.input}`}>about</NavLink>
                   </Col>
               </Row>
                <Row>
                    <Col sm={{ span: 10, offset: 1 }} lg={{ span: 0, offset: 2 }} className='box'>
                        <NavLink to={`/about/${this.state.input}`}>about1</NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ span: 10, offset: 1 }} lg={{ span: 0, offset: 2 }} className='box'>
                        <NavLink to={`/about/${this.state.input}`}>about</NavLink>
                    </Col>
                </Row>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;