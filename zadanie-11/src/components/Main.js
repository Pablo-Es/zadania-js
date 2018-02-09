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
    return <React.Fragment>
    <Table>
        <TableHeader displaySelectAll={state.showCheckboxes}>
            <TableRow>
                <TableHeaderColumn>Nazwa</TableHeaderColumn>
                <TableHeaderColumn>Poziom zawodnika</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={state.showCheckboxes}>
            {players.map(player => <TableRow key={player.id}>
                <TableRowColumn><Link to={`/player/${player.id}`}>{player.name}</Link></TableRowColumn>
                <TableRowColumn>{player.level}</TableRowColumn>
            </TableRow>)}
        </TableBody>
    </Table>
    </React.Fragment>
};

