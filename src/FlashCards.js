import React from 'react';
import Card from './Card'



const FlashCards = (props) => (

  <div style={cardContainerStyle}>
    {props.flashCards.map(card => (<Card key={card.id} {...card} updateCard={props.updateCard} editCard={props.editCard} removeCard={props.removeCard} /> ))}
  </div>

)

const cardContainerStyle ={
  display: "flex",
  flexDirection: "row",
  border: "solid red 2px",
  flexWrap: "wrap",
}

export default FlashCards