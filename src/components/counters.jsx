import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters-rendered");
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            // value={counter.value} // these (value, id) are all properties of counter component.So we can just create a general property including all other ones.
            // id={counter.id}
            counter={counter} // counter = counter which includes (id and value). We can access them by props.counter.id
          />
        ))}
      </div>
    );
  }
}

export default Counters;
