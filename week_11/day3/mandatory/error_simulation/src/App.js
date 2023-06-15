import logo from './logo.svg';
import './App.css';
import React from 'react'
import ErrorBoundary from './ErrorBoundary'

class BuggyCounter extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidUpdate() {
    if (this.state.counter >= 5) {
      throw new Error('Too much errors!');
    }
  }


  render() {
    return(
      <div className = 'error-counter'>
        <p onClick={this.handleClick}>Error counter: {this.state.counter}</p>
      </div>
    )
  }
}



export default BuggyCounter;
