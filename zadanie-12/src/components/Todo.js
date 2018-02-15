import React from 'react';


export default class extends React.Component {

    render() {
        const {name, isFinished} = this.props;
        return <React.Fragment>
            <ul>
                <li className={isFinished ? 'isFinished--true' : 'isFinished--false'}>{name}</li>
            </ul>
        </React.Fragment>
    }

}