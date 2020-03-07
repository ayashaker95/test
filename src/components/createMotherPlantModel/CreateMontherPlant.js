import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import CreateAction from "../createAction/CreateAction";

const CreateMotherPlant = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color={"white"} onClick={toggle} className={"Button"}>Mother Plant</Button>
            <Modal isOpen={modal} toggle={toggle} className={"Model"} show={true}>
                <ModalHeader toggle={toggle} className={"ModelHeader"} >Create New Mother</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup className={"FormGroup"}>
                            <Label for="exampleEmail">Mother ID</Label>
                            <Input type="id" name="id" id="exampleEmail" p/>
                        </FormGroup>
                        <FormGroup className={"FormGroup"}>
                            <Label for="exampleEmail">Inception date </Label>
                            <Input type="date" name="id" id="exampleEmail" p/>
                        </FormGroup>
                        <FormGroup tag="fieldset" className={"FormGroup"}>
                            <FormGroup check>
                                <Label>Existing Strain</Label>
                                <Label check>
                                    <Input type="radio" name="radio1"/>
                                    Select the mother this new mother was cloned from.
                                    Or select the existing strain this new mother is catagorised in.
                                    <FormGroup >
                                        <label>Mother or Strain</label>
                                        <Input type="select" name="select" id="select" className={"Select"}>
                                            <option></option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                </Label>
                            </FormGroup>
                            <FormGroup check className={"FormGroup"}>
                                <Label>New Strain</Label>
                                <Label check>
                                    <Input type="radio" name="radio1"/>
                                    Select the mother this new mother was cloned from.
                                    Or select the existing strain this new mother is catagorised in.
                                    <FormGroup >
                                        <label>Create New Strain</label>
                                        <Input type="select" name="select" id="select" className={"Select"}>
                                            <option></option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    <CreateAction/>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateMotherPlant;
