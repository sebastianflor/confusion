import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

export default class Menu extends React.Component {
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className='col-12 col-md-5 m-1' key={dish.id}>
                    <Card onClick={this.props.onClick.bind(this, dish.id)}>
                        <CardImg width='100%' src={dish.image} />
                        <CardImgOverlay>
                            <CardTitle>{dish.title}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>{menu}</div>
            </div>
        );
    }
}