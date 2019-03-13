import React, { Component } from 'react'
import './App.css'
import FlashCards from './FlashCards'
import { Button } from 'semantic-ui-react'
import { getDiffieHellman } from 'crypto';

class App extends Component {

  state = {
    cards: [
      { id: 1, title: "card 1", description: "this is a good 1 description", edit: false },
      { id: 2, title: "card 2", description: "this is a 2 description", edit: true },
      { id: 3, title: "card 3", description: "this is a good 3 description", edit: false },
      { id: 4, title: "card 4", description: "this is a good 4 description", edit: false },
    ]
  }

  getId = () => {
    if (this.state.cards.length === 0){
    return 1
    } else {
    return Math.max.apply(Math, this.state.cards.map(item => item.id)) + 1
    }
  }

  addCard = () => {
    let card = { id: this.getId(), title: "", description: "", edit: true }
    this.setState({cards: [card, ...this.state.cards]})
  }

  editCard = (id) => {
    let newCards = this.state.cards.map(card => {
      if (card.id === id) {
        return { id: card.id, title: card.title, description: card.description, edit: true }
      } else {
        return card
      }
    })
    this.setState({ cards: newCards })
  }

  removeCard = (id) => {
    let newCards = this.state.cards.filter(card => {
      if (card.id === id) {
        return
      } else {
        return card
      }
    })
    this.setState({ cards: newCards })

  }

  updateCard = (cardData) => {
    let newCards = this.state.cards.map(card => {
      if (card.id === cardData.id) {
        return { id: cardData.id, title: cardData.title, description: cardData.description, edit: false }
      } else {
        return card
      }
    })

    this.setState({ cards: newCards })
  }

  render() {
    return (
      <div>
        <h1 style={{marginLeft: "30px"}}>React Flash Cards</h1>
        <Button style={{marginLeft: "30px", width: "100px"}} color="blue" onClick={this.addCard}>+</Button>
        <FlashCards flashCards={this.state.cards} updateCard={this.updateCard} editCard={this.editCard} removeCard={this.removeCard} />
      </div>
    )
  }
}


export default App;
