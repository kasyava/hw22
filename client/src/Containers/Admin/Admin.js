import React, {Component} from 'react';

import axios from '../../axios-config';
import {Col, Form} from "react-bootstrap";


class EditPage extends Component {
    state = {
        page: '',
        title: '',
        content: ''
    };

    textHandler = event =>{
        this.setState({[event.target.name]: event.target.value});
    };


    submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(item=>{
            if(item !== "page") formData.append(item, this.state[item])
        });
        axios.post(this.state.page,formData).then(response => {
            if(response.status === 200) alert('Content already change');
            else alert('Error');
        })
    };
    render(){
        return (
            <div className='justify-content-center'>
                <Form as={Col}>
                    <Form.Group controlId="Page">
                        <Form.Label>Select page</Form.Label>
                        <Form.Control  name="page" onChange={(e)=>this.textHandler(e)} value={this.state.page} as="select">
                            <option value="">Select page for changing</option>
                            <option>home</option>
                            <option>about</option>
                            <option>faq</option>
                            <option>contact</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" onChange={(e)=>this.textHandler(e)} value={this.state.title} placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group controlId="Content">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows="4" name="content" onChange={(e)=>this.textHandler(e)} value={this.state.content} placeholder="Enter content" />
                    </Form.Group>
                    <button className='btn btn-primary' onClick={(e)=>this.submitForm(e)}>Save</button>
                </Form>
            </div>
        )
    }
}

export default EditPage;