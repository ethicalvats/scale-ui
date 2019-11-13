import React from "react";
import { Form } from "./Form";
import Details from "./Details";

export class Signup extends React.Component{
    state
    constructor(props){
        super(props)
        this.state = {
            formData:{},
            nextStep:false
        }
    }

    handleNext = (formData) =>{
        this.setState({formData, nextStep: true})
    }

    render(){
        const {nextStep, formData} = this.state
        return <div>
            <h1>Signup</h1>
            {nextStep? <Details data={{...formData}} />: <Form onNext={(values) => this.handleNext(values)} />}
        </div>
    }
}