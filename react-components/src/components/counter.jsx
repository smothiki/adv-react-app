import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    constructor() {
        super()
        console.log("constructor", this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p> please create new tag</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement() {
        console.log("increment clicked", this)
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            < React.Fragment >
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment </button>
                {/* {this.renderTags()} */}
            </React.Fragment >);
    }

    getBadgeClasses() {
        return "badge badge-" + (this.state.count === 0 ? "warning" : "primary") + " m2";
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero' : count
    }
}

export default Counter;