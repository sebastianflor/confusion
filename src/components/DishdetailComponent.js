import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Badge } from 'reactstrap';

export default class DishDetail extends React.Component {
    renderDetail = (dish) => {
        if(dish) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    renderComment = (dish) => {
        if(dish) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {dish.comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}  <Badge color='info' pill>{comment.rating}</Badge></p>
                                    <p>-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    render() {       
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderDetail(this.props.dish)}
                    {this.renderComment(this.props.dish)}
                </div>
            </div>
        );
    }
}