import React, { Component } from 'react';

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h3 className="text-warning">1 - Class State</h3>
        <p className="fw-bold">Counter : {this.state.counter}</p>
        <button className="btn btn-success" onClick={this.handleIncrement}>
          Increment
        </button>
        <hr />
      </div>
    );
  }
}

export default ClassState;
