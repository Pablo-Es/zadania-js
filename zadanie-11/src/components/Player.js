import React from 'react';
import players from '../data/players';
import { Link } from 'react-router-dom';

export default (props) => {
    const playerToDisplay = props.match.params.id;
    const player = players[playerToDisplay];
    return player?
        <React.Fragment>
        <h2>Gracz</h2>
            <p>Nazwa: {player.name}</p>
        <p>Poziom: {player.level}</p>
        <p>Życiorys: {player.bio}</p>
        <Link to='/'>Powrót na stronę główną</Link>
    </React.Fragment>
        :
        <p>Brak zawodnika</p>
}