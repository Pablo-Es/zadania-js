import React from 'react';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import players from '../data/players';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
export default  () => {
    const state = {
        showCheckboxes: false,
    };
    const playersIds = Object.keys(players);
    return <React.Fragment>
    <Table>
        <TableHeader displaySelectAll={state.showCheckboxes}>
            <TableRow>
                <TableHeaderColumn>Nazwa</TableHeaderColumn>
                <TableHeaderColumn>Poziom zawodnika</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={state.showCheckboxes}>
            {playersIds.map(id => <TableRow key={id}>
                <TableRowColumn><Link to={`/player/${id}`}>{players[id].name}</Link></TableRowColumn>
                <TableRowColumn>{players[id].level}</TableRowColumn>
            </TableRow>)}
        </TableBody>
    </Table>
    </React.Fragment>
};

