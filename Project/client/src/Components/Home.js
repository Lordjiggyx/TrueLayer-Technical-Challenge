import React, { Component } from 'react'
import { FormGroup, Label, Input, Container, Button , Alert ,Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"
import axios from "axios"
import "../CSS/Home.css"
export default class Home extends Component {

    //This is the state of the application which will be used throughout
    state={
        //the value to represent the pokemon name being searched in the textfiled
        name:"",
        //The object to represnet the pokemon object
        pokemon:{},
        //Used to toggle the vsisbilty of te modal
        modalVisibility:false,
        //Used to toggle the alert if the search is empty
        EmptyError:null,
    }
    
    //This method keeps track of the textfield value as it takes in an event listener and updates the state of the application
    handleChange = input => e =>{
        this.setState({
            [input]:e.target.value
        })
        
    }

    //This method is used to toggle the state of the modal mkaing it invisible -> visibe and vice versa
    modalToggle =()=>
    {
        this.setState({
            //sets the state of the modal to negate the current state of modal thus allowing for toggle functionality
            modalVisibility:!this.state.modalVisibility
        })

        
    }

    //This method is called when a pokemon is searched
    getPokemon = () =>
    {
        //If the textfiled is empty an alert is displayed
        if(this.state.name === "")
        {
            this.setState({EmptyError:true})
        }
        else
        {
            //Axios is used to make a request to the backend and the name of the pokemon is passed in as a parameter
            axios.get(`Routes/pokemon/${this.state.name}`)
            //Once the request is made the response is obtained and the state of the application is set 
            .then(res =>
                {
                    //pokemon is set to res.data which is the response sent by the request to the backend method
                    this.setState({name:"",pokemon:res.data, modalVisibility:true , EmptyError:false})
                    //ressting the value of the textfiled
                    document.getElementById("name").value = "";
                })
        }

       
    }
    
    //Render is the method that renders the components
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
                {/**This is called conditional rendering meaining that the alert is only displayed if the error textfield is empty */}
                {this.state.EmptyError==true ? <div><Alert fade="true" color="danger">Please Enter A Name</Alert> </div>: null}
                </div>
                
                </Container>
                {/**This is the modal that is displayed when the user searches for a pokemon
                 * It takes in 2 values isOPne and toggle , which determine the visblility and the toggle  fucntion of the modla
                 */}
                <Modal isOpen={this.state.modalVisibility}
                toggle={this.modalToggle}>
                <ModalHeader >Pokemon Information</ModalHeader>
                <div className="text-center">
                <ModalBody>                
                <h6>Pokemon Name:</h6>
                <div>{this.state.pokemon.name}</div>

                <h6>Pokemon Description:</h6>
                <div><i>{this.state.pokemon.desc}</i></div>

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
