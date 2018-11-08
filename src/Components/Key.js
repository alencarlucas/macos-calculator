import React from 'react';
import styles from './styles.scss'

class Key extends React.Component {
  constructor () {
    super()
  }

  render() {
    console.log('styles', styles)
    return (
      <td className={styles.key} colSpan={this.props.colSpan || 1}>{this.props.value}</td>
    );
  }
}

export default Key;
