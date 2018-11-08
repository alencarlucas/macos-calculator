import React from 'react';
import Key from './Key'

class Row extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <tr className={'row'}>
        {this.props.keys.map((key, i) => {
          return <Key {...key} key={i} />
        })}
      </tr>
    );
  }
}

export default Row;
