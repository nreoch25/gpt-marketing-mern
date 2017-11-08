import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInventory } from "../actions/AppActions";

class Inventory extends Component {
  componentDidMount() {
    this.props.fetchInventory();
  }
  displayInventory() {
    if(this.props.inventory.length > 0) {
      let imageArray = []
      this.props.inventory.map((image, index) => {
        const base64Image = new Buffer(image.img).toString("base64");
        const base64ImageURL = `data:${image.contentType};base64,${base64Image}`;
        imageArray.push(
          <div key={index}>
            <img src={base64ImageURL} />
          </div>
        );
      });
      return imageArray;
    }
  }
  render() {
    return (
      <div>
        <p>CBC Marketing - Inventory</p>
        {this.displayInventory()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inventory: state.app.inventory
  };
}

export default connect(mapStateToProps, { fetchInventory })(Inventory);
