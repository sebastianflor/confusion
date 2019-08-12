import React from 'react';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            // selectedDish: null
        }
    }
    // onDishSelect = (id) => {
    //     this.setState({ selectedDish: id });
    // }
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}