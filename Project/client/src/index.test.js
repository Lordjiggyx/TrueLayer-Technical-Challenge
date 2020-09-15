import React from "react"
import ReactDom from "react-dom"
import Home from "./Components/Home"
import axios from "axios"

import {render , screen} from "@testing-library/react"

//This checks that the Home component renders 
it("Home renders without crashing", ()=>
{
    //create a div 
    const div = document.createElement("div");
    //attempt to render home at the div created 
    ReactDom.render(<Home></Home> , div)
})

//This checks that the Title renders correctly
it('Page renders with correct title', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Pokemon Search Engine')).toBeInTheDocument();
  });

//checks that button renders with correct lable
 it('Buttom renders with correct text', () => {
    const { getByRole } = render(<Home />);
    expect(screen.getByRole("button")).toHaveTextContent("Submit");
  });

