import React from 'react'
import Styled from 'styled-components'

function Card() {
  return (
      <>
    <Main>
        <CardHold>
            <Text>INNOVATION HUB</Text>
            <Text2>We give different oppotunites 
                with the listed below; incubation,
                Acceleration, Training, Consultin and 
                many more </Text2>
        </CardHold>

    </Main>
    </>
  )
}

export default Card


const Main = Styled.div`
height: 300px;
width: 100%;
background-color: grey;
display: flex;
justify-content: center;
align-items: center;
`
const CardHold = Styled.div`
height: 200px;
width: 50%;
background-color: yellow;
border-radius:5px;
`
const Text = Styled.h1`

`
const Text2 = Styled.p`

`