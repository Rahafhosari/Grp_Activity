import React, { Component } from 'react'

export class Sum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.x.props,
            y: this.y.props,
            sum: 0
        };
    }
    summation = (e) => {
        this.setState({
            sum : (this.state.x + this.state.y)
        });
    }
    sum = (e) => {
      this.setState({
          sum : (this.state.x + this.state.y)
      });
  }
    render() {
    return (
        <>
        <div>Sum</div>
        {/* <p> x = {this.state.x} || y = {this.state.y}</p>
        <button onClick={this.summation}>Sum</button>
        <p> {this.state.sum} </p> */}

        <em>Added new lines</em> 
        <h2>malik </h2>
        <p>Another added lines of code</p>
        </>

    )
  }
}

export default Sum