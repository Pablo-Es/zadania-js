import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

export default class extends React.Component {
    render() {
        return <BrowserRouter>
            <MuiThemeProvider>
                <React.Fragment>
                    <Header heading="Zestawienie zawodników superligi w rzucie beretem na odległość"/>
                    <Main/>
                    {/*<Header heading=""/>*/}
                    {/*<Route path="/" exact component={Home}/>*/}
                    {/*<Route path="/about" component={() => 'About'}/>*/}
                    {/*<Route path="/products" component={Products}/>*/}
                    {/*<Route path="/product/:id" component={Product}/>*/}
                    <Footer footer="Wszelkie prawa zastrzeżone 2018"/>
                </React.Fragment>
            </MuiThemeProvider>
        </BrowserRouter>
    }
}