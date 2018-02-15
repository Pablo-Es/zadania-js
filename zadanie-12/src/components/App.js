import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Todo from './Todo';
import '../css/styles.css';
import AddTodo from './AddTodo';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {name: 'Zrobić zadanie domowe', isFinished: false},
                {name: 'Wynieść śmieci', isFinished: true},
                {name: 'Umyć okna', isFinished: true},
                {name: 'Nakarmić rybki', isFinished: true},
            ]
        }
    }
    newTodos = () => {
        this.setState({
            tasks: [...this.state.tasks, newTodo]
        });
    }

    render() {
        return <MuiThemeProvider>
                <React.Fragment>
                    {this.state.tasks.map(task => <Todo name={task.name} isFinished={task.isFinished}/>)}
                    <AddTodo onAdded={this.newTodos}/>
                </React.Fragment>
            </MuiThemeProvider>
    }
}