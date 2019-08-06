import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Badge } from 'reactstrap';

export default class DishDetail extends React.Component {
    renderComments(comments) {
        if(comments != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments.map((comment) => {
                            return (
                                <li>
                                    <p>{comment.comment}  <Badge color='info' pill>{comment.rating}</Badge></p>
                                    <p>-- {comment.author} {comment.date}</p>
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
        <div className='row'>
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            {this.renderComments(this.props.dish.comments)}
        </div>
    );
    }
}