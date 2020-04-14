import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import AnimalInput from "../AnimalInput/AnimalInput";
import AnimalList from "../AnimalList/AnimalList";
import JacksonView from "../JacksonView/JacksonView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Scott's Zoo has {this.props.store.animalsReducer.animalsList.length}{" "}
          animal(s)
        </h1>
        <JacksonView />
        <AnimalInput />
        <AnimalList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
