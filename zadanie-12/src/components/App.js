import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tasks from '../data/tasks';
import Todo from './Todo';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: tasks
        }
    }


    render() {

        return <BrowserRouter>
            <MuiThemeProvider>
                <React.Fragment>
                 <Todo/>
                </React.Fragment>
            </MuiThemeProvider>
        </BrowserRouter>
    }
}