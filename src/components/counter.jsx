import React, { Component } from "react";

class Counter extends Component {
  //   constructor() { // instead of this you can define your function as an arrow function as we did here
  //     super(); // call the constrcutor of the parent class
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter-updated");
    // we can make a ajax call upon a change here
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter-unmount");
  }

  render() {
    console.log("Counter-rendered");
    return (
      <div>
        <h4>Item {this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} // this function is called as a stand alone function like this; function(), not like this obj.function() as this.getBadgeClasses().
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className=" btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter; // var value = this.state.value
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
