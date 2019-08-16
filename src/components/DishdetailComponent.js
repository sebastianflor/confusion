import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Badge, Breadcrumb, BreadcrumbItem, 
    Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    handleSubmit = (values) => {
        alert(JSON.stringify(values))
        console.log(JSON.stringify(values))
    }

    render() {

        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);

        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-comment fa-lg'> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Your Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className='form-group'>
                                <Label htmlFor='rating'>Rating</Label>
                                <div>
                                    <Control.select model='.rating' id='rating' name='rating'
                                    className='form-control' >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </div>
                            </div>
                            <div className='form-group'>
                                <Label htmlFor='author'>Your Name</Label>
                                <div>
                                    <Control.text model='.author' id='author' name='author' placeholder=' Your Name'
                                    className='form-control' validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                    <Errors className='text-danger'
                                    model='.author'
                                    show='touched'
                                    messages={{
                                        required: 'Name is required',
                                        minLength: 'Must be at least 3 characters',
                                        maxLength: 'Must be less than or equal to 15 characters'
                                    }}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <Label htmlFor='comment'>Comment</Label>
                                <div>
                                    <Control.textarea model='.comment' id='comment' name='comment' 
                                    className='form-control' rows='6' validators={{ required }} />
                                    <Errors className='text-danger'
                                    model='.comment'
                                    show='touched'
                                    messages={{ required: 'Comment is required' }} />
                                </div>
                            </div>
                            <div className='form-group'>
                                <Button type='submit' color='primary'>Submit</Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

const RenderDish = ({dish}) => {
    return (
        <div className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const RenderComments = ({comments}) => {
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4>Comments</h4>
            <ul className='list-unstyled'>
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}  <Badge color='info' pill>{comment.rating}</Badge></p>
                            <p>-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    );
                })}
            </ul>
            <CommentForm />
        </div>
    );
}

const DishDetail = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                </div>
            </div>
            <div className='row'>
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
            </div>
        </div>
    );
}

export default DishDetail;