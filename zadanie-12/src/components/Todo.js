import React from 'react';
import tasks from '../data/tasks';

export default (props) => {
        const tasksIds = Object.keys(tasks);
        const {name} = props;
        return <React.Fragment>
            <ul>
                {tasksIds
                    .map(id => <li key={id}>{tasks[id].name}</li>)
                }
            </ul>
        </React.Fragment>
}