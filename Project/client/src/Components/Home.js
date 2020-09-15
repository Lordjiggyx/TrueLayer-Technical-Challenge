import React, { Component } from 'react'
import { FormGroup, Label, Input, Container, Button , Alert} from "reactstrap"
import "../CSS/Home.css"
export default class Home extends Component {




    state={
        name:"",
        pokemon:{},
        modalVisibility:false
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
                <FormGroup>
                    <Label for = "Name"><b>Name:</b></Label>
                    <Input  type="text" name = "name "id="name" placeholder="Enter A Name" onChange={this.handleChange("name")}  ></Input>

                <Button color="primary">Submit</Button>      

                </FormGroup>
                </div>

                
                </Container>
            
        </div>
        )
    }
}
