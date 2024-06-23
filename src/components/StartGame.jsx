import React from 'react'
import styles, { styled } from 'styled-components'
import { Button } from './Button'
function StartGame({toggle}) {
    return (
        <Container>
            <div><img src="\images\Dices.png" alt="" /></div>
            
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
     </Container>
    )
}

export default StartGame

const Container = styled.div `
max-width: 1180px;
height: 100vh;
align-items: center;

display: flex;
margin: 0 auto;

.content h1{
    font-size: 96px;
    white-space: nowrap;
}
`


   