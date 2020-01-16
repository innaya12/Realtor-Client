import React from 'react';

class Counter extends React.Component {
    render() {
        const {count, index, onIncrease, onDecrease, onDouble, customUpdate} =
            this.props;
        return (
            <div>
                <input type={'text'} value={count} onChange={(e) =>
                    customUpdate(index, e.target.value)}
                       style={{width: "50px", textAlign: "center"}}/>
                <button onClick={() => onIncrease(index)} style={button}> + </button>
                <button onClick={() => onDecrease(index)} style={button}> - </button>
                <button onClick={() => onDouble(index)} style={button}> *2 </button>
            </div>
        );
    }
}

export default Counter;

const button = {
    fontSize: "16px",
    border: 0,
    padding: '5px 10px',
    cursor:'pointer'
};