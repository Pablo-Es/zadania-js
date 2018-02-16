import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks:[
                {name:''}
            ]
        }
    }
 newTodo = (e) => {
     this.setState({
             tasks: [{
                 name: e.target.value
             }]
         }
     )

 };
    currentStateApp = () => {
        return this.state
    };


    render() {
        // console.log(this.state);
        const {onAdded} = this.props;
        return <React.Fragment>
            <input type="text" onChange={this.newTodo}/>
            <button onClick={onAdded}>Add</button>
        </React.Fragment>
    }

}