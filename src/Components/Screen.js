import React from 'react'
import Row from './Row'

class Screen extends React.Component {
  constructor () {
    super()
  }

  render() {
    return <Row keys={[{className: 'screen', value: 42, colSpan: 4, icons: <span><i className={"fas fa-circle red"}></i><i className={"fas fa-circle yellow"}></i><i className={"fas fa-circle green"}></i></span> }]} />
  }
}

export default Screen