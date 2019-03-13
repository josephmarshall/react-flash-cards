import React from 'react'
import { Form, } from 'semantic-ui-react'

class CardEditForm extends React.Component {

state = { id: this.props.formData.id,
          title: this.props.formData.title,
          description: this.props.formData.description }

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.updateCard(this.state)
  this.props.makeCardVisible()  
  this.setState({firstName: "", phone: ""})
}

  render (){
    return(
      <div style={{...this.props.cardStyle, border: "solid gray 3px"}}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            fluid
            placeholder="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <hr />
          <Form.Input
            fluid
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Form.Button color="green" inverted="true" style={{marginTop: "10px", marginLeft: "171px"}}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default CardEditForm 