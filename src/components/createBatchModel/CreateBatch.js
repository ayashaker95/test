import React, {Component, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import "./CreateBatch.scss";
import CreateAction from "../createAction/CreateAction";

class CreateBatch extends Component {

    constructor(props) {

        super(props);
        this.state = {
            model: false,
            BatchId:"",
            PlantCount:"",
            DateCloned:"",
            Strain:"",
            MotherID:"",
            Zone:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggle = ()=> {
        this.setState(
            {
                model: !this.state.model
            })
    }
    handleChange = event => {
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    handleSubmit = event => {
        const data = this.state;
        console.log(data)
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <Button
                    color={"white"}
                    className={"Button"}
                    onClick={this.toggle}>
                    Batch
                </Button>
                <Modal
                    isOpen={this.state.model}
                    toggle={this.toggle}
                    class
                >
                    <ModalHeader
                        className={"ModelHeader"}
                        toggle={this.toggle}>
                        Create New Batch
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup className={"FormGroup"}>
                                <Label for="exampleEmail">
                                    Batch ID
                                </Label>
                                <Input
                                    type="text"
                                    name="BatchId"
                                    id="exampleEmail"/>
                            </FormGroup>
                            <FormGroup className={"FormGroup"}>
                                <Label for="examplePassword">
                                    Plant Count
                                </Label>
                                <Input type="text"
                                       name="PlantCount"
                                       id="examplePassword"/>
                            </FormGroup>
                            <FormGroup className={"FormGroup"}>
                                <Label for="examplePassword">
                                    Date Cloned
                                </Label>
                                <Input type="date"
                                       name="DateCloned"
                                       id="examplePassword"
                                       placeholder="DD//MM//YYYY"/>
                            </FormGroup>
                            <FormGroup className={"FormGroup"}>
                                <Label for="exampleSelect">
                                    Strain
                                </Label>
                                <Input type="select"
                                       name="Strain"
                                       id="exampleSelect"
                                       className={"Select"}
                                >
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className={"FormGroup"}>
                                <Label for="exampleSelect">
                                    Mother ID
                                </Label>
                                <Input type="select"
                                       name="MotherID"
                                       id="exampleSelect"
                                       className={"Select"}>
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className={"FormGroup"}>
                                <Label for="exampleSelect">Zone</Label>
                                <Input type="select"
                                       name="Zone"
                                       id="exampleSelect"
                                       className={"Select"}
                                >
                                    <option></option>
                                    <option>Zone 01</option>
                                    <option>Zone 02</option>
                                    <option>Zone 03</option>
                                    <option>Zone 04</option>
                                    <option>Zone 05</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary"
                                onClick={this.toggle}>
                            Cancel
                        </Button>
                        <Button onClick={<CreateBatch/>}>
                            Submit
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CreateBatch;
