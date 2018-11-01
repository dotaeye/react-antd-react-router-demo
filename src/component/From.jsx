import React, { Component } from 'react';
import AddList from './AddList'
import './From.css';
export default class From extends Component {
  state = {
    trueNum: true,
    truePassword: true,
    repeatPasswore: true,
  };
  handlePhoneNumber = e => {
    let _number = this.phoneNumber.value;
    if (!/^1(3|4|5|7|8)\d{9}$/.test(_number)) {
      this.setState({
        trueNum: false,
      });
    } else {
      this.setState({
        trueNum: true,
      });
    }
  };
  handlePassword = e => {
    let _password = this.password.value;

    if (_password.length < 6) {
      this.setState({
        truePassword: false,
      });
    } else {
      this.setState({
        truePassword: true,
      });
    }
  };
  handleRepeatPassword = () => {
    let _password = this.password.value,
      _repeat = this.reapeatPassword.value;
    if (_password !== _repeat) {
      this.setState({
        repeatPasswore: false,
      });
    } else {
      this.setState({
        repeatPasswore: true,
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    let { trueNum, truePassword, repeatPasswore } = this.state;
    let _password = this.password.value,
      _phoneNumber = this.phoneNumber.value;
    if (trueNum && truePassword && repeatPasswore) {
      if (_password.length !== 0 && _phoneNumber.length !== 0) {
        console.log('提交成功');
        console.log('password:' + _password);
        console.log('phone:' + _phoneNumber);
      } else {
        alert('请输入信息');
      }
    } else {
      alert('请输入真确的信息');
    }
  };
  render() {
    return (
      <div className="from-wrapper">
        <form action="/from" onSubmit={this.handleSubmit} ref={from => (this.from = from)}>
          手机号码：
          <input
            type="text"
            onChange={this.handlePhoneNumber}
            ref={from => (this.phoneNumber = from)}
          />
          <span className={this.state.trueNum ? 'hide' : 'error'}>手机号不匹配</span>
          <div className="password">
            密码：
            <input
              type="password"
              placeholder="最少6位密码"
              onChange={this.handlePassword}
              ref={from => (this.password = from)}
            />
            <span className={this.state.truePassword ? 'hide' : 'error'}>密码少于6位</span>
            <br />
            重复：
            <input
              type={this.state.truePassword ? 'password' : 'button'}
              placeholder="和上面的一样"
              ref={from => (this.reapeatPassword = from)}
              onChange={this.handleRepeatPassword}
            />
            <span className={this.state.repeatPasswore ? 'hide' : 'error'}>2次密码不一样</span>
          </div>
          <input type="submit" value="提交" />
        </form>
        <AddList/>
      </div>
    );
  }
}
