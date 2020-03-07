import React, {Component} from "react";
import "./CreateAction.scss";
import TextareaAutosize from 'react-textarea-autosize';
import {Button} from "reactstrap";

class CreateAction  extends Component{
    state={
        formOpen:false
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }
    renderAddButton = () => {
        return <div onClick={this.openForm}>
            Create
        </div>
    }

    renderForm = () => {
        console.log(this.props.zone);
    }
    render(){
        return(
            this.state.formOpen ? this.renderForm() :this.renderAddButton()
        );

    }
}

export default CreateAction;
