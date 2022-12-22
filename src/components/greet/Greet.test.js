import { render, screen } from "@testing-library/react";

import { Greet } from "components/greet/Greet";

it("should renders greet correctly", ()=>{
    render(<Greet/>);
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})


/*
* Greet should render the text hello and if a name is passed into the component 
* It should render hello followed by the name.
*/

it("should renders greet name correctly", ()=>{
    render(<Greet name="Jack Bau"/>);
    const textElement = screen.getByText(/Jack Bau/i)
    expect(textElement).toBeInTheDocument()
})
