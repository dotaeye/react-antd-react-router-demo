import React, { Component } from 'react';

import { Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
    };
  }

  hanleChange() {
    this.setState({
      input: this.input.value,
    });
    console.log(this.input.value);
  }
  render() {
    return (
      <div>
        <h2>
          从Home中传入的值为：
          {this.props.match.params.id}
        </h2>
        <Row>
          <Col sm={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 2 }} className="box">
            <input
              type="text"
              placeholder="输入需要传入的数据"
              ref={input => {
                this.input = input;
              }}
              onInput={this.hanleChange.bind(this)}
            />
            <NavLink to={`/home/${this.state.input}`}>about</NavLink>
          </Col>
          <Col sm={{ span: 0, offset: 1 }} lg={{ span: 6, offset: 2 }} className="box">
            <NavLink to={`/home/${this.state.input}`}>about</NavLink>
          </Col>
          <Col sm={{ span: 0, offset: 1 }} lg={{ span: 6, offset: 2 }} className="box">
            <NavLink to={`/home/${this.state.input}`}>about</NavLink>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }} lg={{ span: 0, offset: 2 }} className="box">
            <NavLink to={`/home/${this.state.input}`}>about</NavLink>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }} lg={{ span: 0, offset: 2 }} className="box">
            <NavLink to={`/home/${this.state.input}`}>about</NavLink>
          </Col>
        </Row>
      </div>
    );
  }
}

About.propTypes = {};

export default About;
