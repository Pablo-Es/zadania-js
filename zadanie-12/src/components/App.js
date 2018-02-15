import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Todo from './Todo';
import '../css/styles.css';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {name: 'Zrobić zadanie domowe', isFinished: false},
                {name: 'Wynieść śmieci', isFinished: true}
            ]
        }
    }


    render() {
        return <MuiThemeProvider>
                <React.Fragment>
                    {this.state.tasks.map(task => <Todo name={task.name} isFinished={task.isFinished}/>)}
                </React.Fragment>
            </MuiThemeProvider>
    }
}