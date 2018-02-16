import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ''
        }
    }

 newTodo = (e) => {
     this.setState({
             task: e.target.value
         }
     )

 };
    onButtonClicked = () => {
         this.props.onAdded(this.state.task);
    };

    render() {

        return <React.Fragment>
            <input type="text" onChange={this.newTodo}/>
            <button onClick={this.onButtonClicked}>Add</button>
        </React.Fragment>
    }

}