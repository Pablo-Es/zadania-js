import React from 'react';
import players from '../data/players';
import { Link } from 'react-router-dom';

export default (props) => {
    const playerToDisplay = parseFloat(props.match.params.id);
    const player = players.find(player => player.id === playerToDisplay);
    return player ?
        <React.Fragment>
        <h2>Gracz</h2>
            <p>Nazwa: {player.name}</p>
        <p>Poziom: {player.level}</p>
        <p>Życiorys: {player.bio}</p>
        <Link to='/'>Powrót na stronę główną</Link>
    </React.Fragment>
        :
        <React.Fragment>
        <p>Brak takiego zawodnika</p>
    <Link to='/'>Powrót na stronę główną</Link>
        </React.Fragment>
}