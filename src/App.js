import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {changeState} from './action/action'
class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeDispatchState();
  }


  render() {
    return (
      <div>
        {this.props.username}
        <button onClick={this.handleClick}>ClickME</button>
      </div>
    );
  }
}

function mapFromstate(state) {
  return (
    { username: state.rootReducer.userName }
  )
}

function mapDispatchToProps(dispatch) {
  return (
    {
        changeDispatchState : ()=>{

          dispatch(changeState());
        }
    }
  )
}

export default connect(mapFromstate , mapDispatchToProps)(App);
