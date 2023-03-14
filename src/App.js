import React, { Component } from 'react'
import {connect} from 'react-redux'

export class App extends Component {
  render() {
    return (
      <div>
        Count : {this.props.count} 
        <button onClick={() => this.props.increment(1)}>Increment</button>
        <button onClick={() => this.props.decrement(1)}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    count : state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    increment: (value) => 
    dispatch({
      type: 'INCREMENT',
      value
    }),

    decrement : (value) => 
    dispatch({
      type: 'DECREMENT',
      value
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)