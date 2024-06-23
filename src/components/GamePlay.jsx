import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'

import styled from 'styled-components'
import { Button, Outlinebutton } from './Button'
import Rules from './Rules'
function GamePlay() {
    const [score, setscore] = useState(0);
    const [selectedNumber, SetselectedNumber] = useState();
    const[currentdice, setcurrentdice] = useState(1);
    const[error, setError]= useState()
    const[showrules, setshowrules] = useState();
    const generaterandomnumber = (min,max)=> {
        return Math.floor(Math.random()* (max-min) + min)
    }
    const resetscore = () => {
        setscore(0)
    }
    const rolldice = () =>{
        if(!selectedNumber){
            setError("You have not selected any number");
            return
        }
        
        setError("")
    
        const randomnumber = generaterandomnumber(1,7)
        setcurrentdice((prev)=> randomnumber)

       

        if (selectedNumber === randomnumber){
            setscore ((prev) => prev +randomnumber)
        }else{
            setscore ((prev) => prev -1 )
        }

        SetselectedNumber ( undefined)
    }
    return (
        <MainContainer>
            <div className='Top_Section'>
                 <TotalScore score= {score}/>
            <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} 
            SetselectedNumber={SetselectedNumber}/>
           
            </div>
            <RollDice currentdice={currentdice} 
            rolldice={rolldice}/>
             <div className="btns">
                <Outlinebutton onClick={resetscore}>Reset Score</Outlinebutton>
                <Button
                onClick={ ()=> setshowrules((prev) => !prev)}
                >{
                    showrules ? "Hide ": "Show "
                    } Rules</Button>
             </div>
            { showrules && <Rules/>}
        </MainContainer>
       
    )
}

export default GamePlay


const MainContainer = styled.div`
.Top_Section{
    display: flex;
    align-items: center;
   justify-content: space-around;
}

.btns{
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap:10px
}

`