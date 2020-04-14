import React, { Component } from "react";
import { connect } from "react-redux";

class JacksonView extends Component {
  render() {
    return (
      <div>
        {this.props.store.animalsReducer.currentAnimal && (
          <h2>
            Jackson is looking at:{" "}
            {this.props.store.animalsReducer.currentAnimal}
          </h2>
        )}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(JacksonView);
