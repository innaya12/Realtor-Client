import React from "react";
import Counter from "./counter";

class CounterContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            currentInput1: 0,
            currentInput2: 0,
            currentInput3: 0,
        }
    };

    onCalculating = (index, op) => {
        const current = "currentInput" + index;
        this.setState({
            [current]: op ? this.state[current] + op : this.state[current] * 2
        })
    };
    calcualteAll = () => {
        for (let i = 1; i <= 3; i++) {
            this.onCalculating(i);
        }
    };
    customUpdate = (index, val) => {
        const current = "currentInput" + index;
        if (isNaN(val)) {
            this.setState({
                [current]: 0
            })
        } else {
            this.setState({
                [current]: parseInt(val)
            })
        }
    };
    resetAll = () => {
        this.setState({
            currentInput1: 0,
            currentInput2: 0,
            currentInput3: 0,
        })
    };

    render() {
        const buildCounters = () => {
            let counters = [];
            for (let i = 1; i <= 3; i++) {
                counters.push(<Counter key={i}
                                       index={i}
                                       customUpdate={this.customUpdate}
                                       count={this.state[`counter${i}`]}
                                       onDouble={this.onCalculating}
                                       onIncrease={this.onCalculating}
                                       onDecrease={this.onCalculating}/>)
            }
            return counters;
        };

        const sum = () => {
            let sum = 0;
            for (let i = 1; i <= 3; i++) {
                sum += parseInt(this.state[`counter${i}`]);
            }
            return sum;
        };

        return (
            <div className={"counter-container  text-center"}>
                {buildCounters().map(item => item)}
                <button onClick={() => this.calcualteAll()}> + all</button>
                <button onClick={() => this.calcualteAll()}> - all</button>
                <button onClick={() => this.calcualteAll()}> *2 all</button>
                <button onClick={() => this.resetAll()}> reset all</button>
                <p>Sum: {sum()}</p>
            </div>
        )
    };
}

export default CounterContainer;
