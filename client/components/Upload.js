import React, { Component } from "react";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.formWidth = null;
    this.formHeight = null;
    this.fileUpload = null;
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    //this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(evt) {
    evt.preventDefault();
    this.fileWidth = this.refs.width.value;
    this.fileHeight = this.refs.height.value;
    console.log(this.fileWidth, this.fileHeight);
    var formData = new FormData();
    formData.append("width", this.fileWidth);
    formData.append("height", this.fileHeight);
    formData.append("image", this.fileUpload);
    fetch("http://localhost:3000/api/image", {
      method: "post",
      body: formData
    }).then((response) => {
      console.log("RESPONSE", response);
      this.refs.uploadForm.reset();
    }).catch((error) => {
      console.log("ERROR:", error);
      this.refs.uploadForm.reset();
    });
  }
  onChange(evt) {
    this.fileUpload = evt.target.files[0];
  }
  render() {
    return (
      <div className="container">
        <form ref="uploadForm" onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="width">Image width:</label>
            <input type="text" className="form-control" ref="width" />
          </div>
          <div className="form-group">
            <label htmlFor="height">Image height:</label>
            <input type="text" className="form-control" ref="height" />
          </div>
          <div className="form-group">
            <input type="file" name="upload" className="form-control" onChange={this.onChange} ref="upload" />
          </div>
          <button type="submit" className="btn btn-default" style={{marginTop: "10px"}}>Submit</button>
      </form>
      </div>
    );
  }
}

export default Upload;
