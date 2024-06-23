import styled from "styled-components"



 export const Button = styled.button `
justify-content: center;
padding: 10px 18px;
gap: 10px;
min-width: 220px;
height: 44px;
border:none;
font-size: 16px;
    background-color: black;
    color: white;
    border: 1px solid transparent;
    transition: 0.4s ease-in;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s ease-in;
    }
    `

export const Outlinebutton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
}
`