import React from 'react'
import CardEditForm from './CardEditForm'
import { Button, } from 'semantic-ui-react'

class Card extends React.Component {
  state = { visibility: "visible" }

  hideCardToggle = () => {
    if (this.state.visibility === "visible") {
      this.setState({visibility: "hidden"})
    } else {
      this.setState({visibility: "visible"})
    }
    console.log(this.state.visibility)
  }

  render(){
    if (this.props.edit === true) {
      return (
        <CardEditForm formData={this.props} cardStyle={cardStyle} updateCard={this.props.updateCard}/>
      )
    } else {

    }
    return(
        <div style={cardStyle} onClick={this.hideCardToggle}>
          {this.props.title}
          <Button color="grey" style={{float: "right"}} onClick={() => this.props.removeCard(this.props.id)}>x
          </Button>
          <Button color="blue" style={{float: "right"}} 
          onClick={() => this.props.editCard(this.props.id)}>edit
          </Button>
          <hr />
          <div style={this.state}>
          {this.props.description}
          </div>
        </div>
    )
  }
}

const cardStyle = {
  height: "200px",
  width: "300px",
  border: "solid black 1px",
  padding: "20px",
  margin: "20px",
}

export default Card