import React from 'react'
import Row from './Row'

const keyboardRows = [
  [{ value: 'C' }, { value: '+/-' }, { value: '%' }, { value: '/', color: 'orange' }],
  [{ value: '7' }, { value: '8' }, { value: '9' }, { value: 'x', color: 'orange' }],
  [{ value: '4' }, { value: '5' }, { value: '6' }, { value: '-', color: 'orange' }],
  [{ value: '0', colSpan: 2 }, { value: '.' }, { value: '=', color: 'orange' }]
]

class Keyboard extends React.Component {
  constructor () {
    super()
  }

  render() {
    let rows = keyboardRows.map((row, i ) => <Row keys={row} key={i} />)
    console.log('rows', rows)
    return (
      <table>
        <tbody>{ rows }</tbody>
      </table>
    )
  }
}

export default Keyboard