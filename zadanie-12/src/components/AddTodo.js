import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue:''
        }
    }
 newTodo = (e) => this.state.inputValue = e.target.value;
    render() {
        const {onAdded} = this.props;
        return <React.Fragment>
            <input type="text" onChange={this.newTodo}/>
            <button onClick={onAdded}>Add</button>
        </React.Fragment>
    }

}