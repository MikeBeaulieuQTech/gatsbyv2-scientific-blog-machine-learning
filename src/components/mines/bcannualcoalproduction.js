import React from 'react'
import MinesChart from './mineschart'


export default class AnnualCoalComponent extends React.Component {
  constructor(props) {
    super(props)
    this.inValue = ''
    this.state = {
      mines: props.data,
      isFilter: false,
      isLoading: false,
      error: null,
    }
  }

  draw_data() {
    console.log('state:')
    console.log(this.state)
    //const { mines } = this.state.mines
    const data = this.state.mines.slice(0, 10)
    const labels = data.map(c => c.node.Year)

    const fdata = data.map(c => c.node.Coal_tonnes)
    const achart = (
      <MinesChart id="minestest" name="mines" labels={labels.reverse()} data={fdata.reverse()} />
    )
    return achart
  }


  render() {
    const data = this.props.data
    return (
      <div className="box boxshadow">
        <div className="box margin-top">
        {this.draw_data()}
        </div>
        <div className="grid-6"> 
          <h1>Year</h1>
          <h1>Coal - Tonnes</h1>
          <h1>Value</h1>
        </div>
        {data.map((row, i) => (
          <div className="grid-6" key={`${row.node.id} ${i}`}>
            
            <span>{row.node.Year}</span>
            <span>{row.node.Coal_tonnes}</span>
            <span>{row.node.Coal_value_C}</span>
          </div>
        ))}
      </div>
    )
  }
}
