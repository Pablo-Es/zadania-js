import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Player from './Player';

export default class extends React.Component {
    render() {
        return <BrowserRouter>
            <MuiThemeProvider>
                <React.Fragment>
                    <Header heading="Zestawienie zawodników superligi w rzucie beretem na odległość"/>
                    <Route path="/" exact component={Main}/>
                    <Route path="/player/:id" component={Player}/>
                    <Footer footer="Wszelkie prawa zastrzeżone 2018"/>
                </React.Fragment>
            </MuiThemeProvider>
        </BrowserRouter>
    }
}