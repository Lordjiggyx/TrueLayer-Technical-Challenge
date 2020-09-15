import React, { Component } from 'react'
import { FormGroup, Label, Input, Container, Button , Alert ,Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"
import axios from "axios"
import "../CSS/Home.css"
export default class Home extends Component {


    state={
        name:"",
        pokemon:{},
        modalVisibility:false,
        EmptyError:null,
    }
    
    handleChange = input => e =>{
        this.setState({
            [input]:e.target.value
        })
        
    }

    modalToggle =()=>
    {
        this.setState({
            modalVisibility:!this.state.modalVisibility
        })

        
    }

    getPokemon = () =>
    {
        if(this.state.name === "")
        {
            this.setState({EmptyError:true})
        }
        else
        {
            axios.get(`Routes/pokemon/${this.state.name}`)
            .then(res =>
                {
                    this.setState({name:"",pokemon:res.data, modalVisibility:true})
                    document.getElementById("name").value = "";
                })
        }

       
    }
    
    render() {
        return (
            <div>
            <Container>
                <div className="Introduction">
                <h1>Pokemon Search Engine</h1>

                <h2>Type in a pokemom name to get it's shakesprean description</h2>
                </div>

                <div className="vertical-center">
                <FormGroup id="form1">
                    <Label for = "Name"><b>Name:</b></Label>
                    <Input  type="text" name = "name "id="name" placeholder="Enter A Name" onChange={this.handleChange("name")}  ></Input>

                   

                </FormGroup>

                <Button color="primary" onClick={this.getPokemon}>Submit</Button>   

                {this.state.EmptyError==true ? <div><Alert fade="true" color="danger">Please Enter A Name</Alert> </div>: null}
                </div>

                

                
                </Container>

                <Modal isOpen={this.state.modalVisibility}
                toggle={this.modalToggle}>
                <ModalHeader >Pokemon Information</ModalHeader>
                <div className="text-center">
                <ModalBody>                
                <h4>Pokemon Name</h4>
                <div>{this.state.pokemon.name}</div>

                <h4>Pokemon Description</h4>
                <div>{this.state.pokemon.desc}</div>

                </ModalBody>
                </div>
                <ModalFooter>
                    <Button color="primary" onClick={this.modalToggle}>Close</Button>
                </ModalFooter>
                </Modal>
            
        </div>
        )
    }
}
