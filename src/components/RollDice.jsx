import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

function RollDice({currentdice, rolldice}) {
    

   
    return (
        <MainSection>
            <div className='Dice_section' onClick={rolldice}>
            <img src={`/images/dice_${currentdice}.png`} alt="" />
            <p>CLick on dice to ROll</p>
            </div>
           
        </MainSection>
    )
}

export default RollDice

const MainSection = styled.div`

.Dice_section{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    cursor: pointer;
    
}
    
`

