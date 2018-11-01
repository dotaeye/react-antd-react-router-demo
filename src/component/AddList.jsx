import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddList extends Component {
  static propTypes = {};
  state = {
    menu: [
      {
        type: 'vegetables',
        count: 10,
      },
      {
        type: 'fruits',
        count: 3,
      },
      {
        type: 'beef',
        count: 4,
      },
      {
        type: 'mutton',
        count: 5,
      },
    ],
    addList: [],
  };
  addClick = i => {
    let _menu = this.state.menu;
    let addCount;
    let addList = this.state.addList;
    if (_menu[i].count === 0) {
      return;
    }
    try {
      addCount = this.state.addList[i].count;
      addList[i].count++;
    } catch (e) {
      addCount = 0;
      addCount++;
      let _addList = {
        type: _menu[i].type,
        count: addCount,
      };
      addList.push(_addList);
    }

    _menu[i].count--;

    this.setState({
      menu: _menu,
      addList,
    });
  };
  removeClick(type, i) {
    let _menu = this.state.menu;
    let _menuIndex;
    let addList = this.state.addList;
    _menu.forEach((elm, index) => {
      if (elm.type === type) {
        _menuIndex = index;
      }
    });
    _menu[_menuIndex].count++;
    if (addList[i].count === 1) {
      addList.splice(i, i + 1);
    } else {
      addList[i].count--;
    }
    this.setState({
      menu: _menu,
      addList,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    let { menu, addList } = this.state;
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <ul>
            {menu.map((e, i) => {
              return (
                <li key={i}>
                  <span className="menu-name">{e.type}</span>
                  <span className="menu-count">{e.count}</span>
                  <span className="add" onClick={this.addClick.bind(this, i)}>
                    +
                  </span>
                </li>
              );
            })}
          </ul>
          <ul className="show">
            {addList.map((e, i) => {
              return (
                <li key={i}>
                  <span className="addList-name">{e.type}</span>
                  <span className="addList-count">{e.count}</span>
                  <span className="remove" onClick={this.removeClick.bind(this, e.type, i)}>
                    -
                  </span>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}
