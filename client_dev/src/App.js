import React, { Component } from "react";
import Posts from "./components/Posts";
import "./css/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.getLinks = this.getLinks.bind(this);
  }

  //get links
  getLinks = () => {
    fetch("https://devarchiveserver-tydeaeuifj.now.sh/")
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => console.error(err));
  };

  componentDidMount() {
    this.getLinks();
  }

  render() {
    return (
      <div className="container">
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
