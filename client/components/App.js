import React, { Component } from "react";
import { fetchPosts, fetchPhotos } from "../actions/AppActions";
import Header from "./global/Header";
import Footer from "./global/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.need = [
  () => { return fetchPosts(); },
  () => { return fetchPhotos(); }
];

export default App;
