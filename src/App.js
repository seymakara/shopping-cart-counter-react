import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    // this is called only once when an instance of a class is created.
    super();
    console.log("App-constructor");
  }

  componentDidMount() {
    //perfect place for Ajax Call
    // this.setState({movies})
    console.log("App-mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]; // returns all counters array. 1. clone the array
    const index = counters.indexOf(counter); // 2. find the index of the item you clicked
    counters[index] = { ...counter }; // if you click on the second one, returns {id: 1, value: 4} 3. clone that item
    counters[index].value++; //4. increment the value of the item you clicked
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };
  render() {
    console.log("App-rendered");
    return (
      <div>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
