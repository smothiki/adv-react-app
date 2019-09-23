import React, { Component } from 'react';

class Counter extends Component {




    render() {

        // console.log("pops", this)
        return (
            < div >
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m2"> + </button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m2" disabled={this.isButtonDisabled()}> - </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m2"> O </button>

            </div >);
    }

    getBadgeClasses() {
        return "badge badge-" + (this.props.counter.value === 0 ? "warning" : "primary") + " m2";
    }

    isButtonDisabled() {
        const disabled = (this.props.counter.value === 0) ? "disabled" : ""
        return disabled
    }

    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;