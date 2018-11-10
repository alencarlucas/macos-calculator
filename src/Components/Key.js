import React from 'react';

class Key extends React.Component {
  constructor () {
    super()
  }

  render() {
    const className = [(this.props.className || 'key'), this.props.color].join(" ")
    return (
      <td className={className} colSpan={this.props.colSpan || 1}>
        {this.props.icons}
        {this.props.value}
      </td>
    );
  }
}

export default Key;
