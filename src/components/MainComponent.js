import React from 'react';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }
    onDishSelect = (id) => {
        this.setState({ selectedDish: id });
    }
    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={this.onDishSelect} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}