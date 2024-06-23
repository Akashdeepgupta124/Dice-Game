import React, { useState } from 'react'
import styled from 'styled-components'


function NumberSelector({setError, error, selectedNumber, SetselectedNumber}) {
    const arrnumber = [1,2,3,4,5,6]
    
    
    return (
        <Numberselectorcontainer>
            <p className='red'>{error}</p>
        <div className='box'>
            {arrnumber.map((value,i) => (
                <Box key={i}
                isSelected={value === selectedNumber}
                 onClick={() => SetselectedNumber(value)}>
                    {value}
                    </Box>
            ))}
        </div>
        <p>Select Number</p>
        </Numberselectorcontainer>
    )
}

export default NumberSelector

const Numberselectorcontainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.box{
    display: flex;
   gap: 24px;
}
p{
    font-size: 24px;
    font-weight:700px;
}
 .red{
    color: red;
 }
    
`


const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color:  ${(props) => (props.isSelected ? "white" : "black")};
`