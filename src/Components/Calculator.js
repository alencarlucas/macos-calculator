import React, { Component } from 'react';
import Keyboard from './Keyboard'
import Screen from './Screen'

class Calculator extends Component {
  render() {
    return (
      <table className={'table'}>
        <tbody>
          <Screen />
          <Keyboard />
        </tbody>
      </table>
    );
  }
}

export default Calculator;
