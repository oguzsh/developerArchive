import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      desc: ""
    };
    this.changeName = this.changeName.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    const { name, desc, url } = this.state;
    fetch(`https://devarchiveserver-tydeaeuifj.now.sh/add?name=${name}&desc_text=${desc}&url=${url}`)
      .then(alert("Başarıyla Gönderildi")).catch(err => alert("Bir sorun oluştu"))
      event.preventDefault();
  };

  changeName = e => {
    this.setState({ name: e.target.value });
  };

  changeUrl = e => {
    this.setState({ url: e.target.value });
  };

  changeDesc = e => {
    this.setState({ desc: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="postBox">
            <h1>Developer Archive - Add Posts</h1>
            <form className="postAddForm" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Lorem ipsum"
                className="name"
                value={this.state.name}
                onChange={this.changeName}
              />
              <input
                type="text"
                placeholder="www.loremipsum.com"
                onChange={this.changeUrl}
                value={this.state.url}
                className="url"
              />
              <input
                type="text"
                placeholder="Lorem ipsum di amor...."
                className="desc"
                onChange={this.changeDesc}
                value={this.state.desc}
              />
              <input className="submitBtn" type="submit" value="ADD" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
