import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value++

    this.setState({ counters: counters })
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters: counters })
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    if (counters[index].value !== 0) {
      counters[index].value--
    }
    this.setState({ counters: counters })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment >
    );
  }
}

export default App;
