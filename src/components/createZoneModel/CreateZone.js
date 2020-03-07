import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import "../createBatchModel/CreateBatch.scss";
import {Formik} from "formik";
import TrelloList from "../list/TrelloList";
import {Droppable} from "react-beautiful-dnd";


class CreateZone extends Component {

    constructor(props) {

        super(props);
        this.state = {
            model: false,
        };
    }

    toggle = () => {
        this.setState(
            {
                model: !this.state.model
            })
    }

    render() {

        return (
            <div>
                <Button
                    color={"white"}
                    className={"Button"}
                    onClick={this.toggle}
                >
                    Zone
                </Button>
                <Modal
                    isOpen={this.state.model}
                    toggle={this.toggle}
                    class
                >
                    <ModalBody>
                        <Formik
                            initialValues={{zoneName: '', column: ''}}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    //this.props.zone = values;
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                  values,
                                  handleChange,
                                  handleBlur,
                                  handleSubmit,
                                  isSubmitting,
                              }) => (
                                <form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <div
                                            className={"ModelHeader"}
                                            toggle={this.toggle}
                                        >
                                            Create New Batch
                                        </div>
                                    </FormGroup>
                                    <FormGroup className={"FormGroup"}>
                                        <Label for="zoneName">
                                            Zone Name
                                        </Label>
                                        <input
                                            type="text"
                                            name="zoneName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.zoneName}
                                        />
                                    </FormGroup>
                                    <FormGroup className={"FormGroup"}>
                                        <Label for="SelectColumn">
                                            Column
                                        </Label>
                                        <Input
                                            type="select"
                                            name="column"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.column}
                                        >
                                            <option></option>
                                            <option>Clones</option>
                                            <option>Vetetative</option>
                                            <option>Flower</option>
                                            <option>Drying</option>
                                            <option>Curing</option>

                                        </Input>
                                    </FormGroup>
                                    <FormGroup className={"FormGroup"}>
                                        <Label for="SelectSensor">
                                            Sensor
                                        </Label>
                                        <Input
                                            type="select"
                                            name="sensor"
                                        >
                                            <option></option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className={"FormGroup"}>
                                        <Label for="PlantCapacity">
                                            Plant Capacity
                                        </Label>
                                        <input
                                            type="text"
                                            name="plantCapacity"
                                        />
                                    </FormGroup>
                                    <Button
                                        color="secondary"
                                        onClick={this.toggle}>
                                        Cancel
                                    </Button>
                                    <button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CreateZone;
