import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        return (
            <div>
                {this.props.counters.map((counter) => <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} counter={counter} selected={true} />)}
            </div>
        );
    }
}

export default Counters;