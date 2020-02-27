import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as stuffActions from '../../Services/Stuff/actions'

import logo from '../../Assets/Images/logo.svg';


class Login extends Component {
  componentDidMount(){
    this.props.actions.doSomething('lol')
    this.props.actions.doSomethingAsync({foo: 'bar'})
  }

  render() {
    let {stuff} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <ul>
            {
              stuff.map( (st, i) => (
                <li key={i}>{st}</li>
              ))
            }
          </ul>

        </div>
      </div>
    );
  }
}

const mapStateToProps = ({stuff}) => ({
  stuff
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(stuffActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
