import React, { Component } from "react";
import { Link } from "react-router";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="span12">
            <div className="head">
              <div className="row-fluid">
                <div className="span12">
                  <div className="span6">
                    <h1 className="muted">CBC Marketing</h1>
                  </div>
                  <div className="span4 offset2" style={{marginTop: "15px"}}>
                    <button className="btn pull-right" type="button">Sign In</button>
                  </div>
                </div>
              </div>
              <div className="navbar">
                <div className="navbar-inner">
                  <div className="container">
                    <ul className="nav">
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/upload">Upload</Link>
                      </li>
                      <li>
                        <Link to="/inventory">Inventory</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
