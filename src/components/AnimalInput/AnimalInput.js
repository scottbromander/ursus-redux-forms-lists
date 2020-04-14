import React, { Component } from "react";
import { connect } from "react-redux";

class AnimalInput extends Component {
  state = {
    newAnimal: "",
  };

  handleChange = (event) => {
    this.setState({
      newAnimal: event.target.value,
    });
  };

  handleClickEvent = (event) => {
    this.props.dispatch({ type: "ADD_ANIMAL", payload: this.state.newAnimal });
    this.setState({
      newAnimal: "",
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.newAnimal}
          placeholder="Enter an Animal!"
        />
        <button onClick={this.handleClickEvent}>Add Animal</button>
      </div>
    );
  }
}

export default connect()(AnimalInput);
