import React, { Component } from "react";
import { connect } from "react-redux";

class AnimalList extends Component {
  handleClickEvent = (animal) => (event) => {
    this.props.dispatch({ type: "SET_CURRENT_ANIMAL", payload: animal });
  };

  render() {
    console.log(this.props.store);

    const animalArray = this.props.store.animalsReducer.animalsList.map(
      (item, index) => {
        return (
          <li key={index} onClick={this.handleClickEvent(item)}>
            {item}
          </li>
        );
      }
    );

    return <ul>{animalArray}</ul>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AnimalList);
