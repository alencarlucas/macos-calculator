import React from 'react'
import Row from './Row'

class Screen extends React.Component {
  constructor () {
    super()
  }

  render() {
    return <Row keys={[{className: 'screen', value: 42, colSpan: 4 }]} />
  }
}

export default Screen