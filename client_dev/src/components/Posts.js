import React, { Component } from "react";
import SearchInput, { createFilter } from "react-search-input";

const KEYS_TO_FILTERS = ["name", "desc_text"];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(term) {
    this.setState({ filterText: term });
  }

  render() {
    const filteredText = this.props.posts.filter(
      createFilter(this.state.filterText, KEYS_TO_FILTERS)
    );
    return (
      <div className="header">
        <h1 className="title"> Developer Archive </h1>
        <SearchInput
          className="search-input"
          placeholder="What are you looking for ?"
          onChange={this.searchUpdated}
        />
        {/* Modal Start */}
       { /* <Menu /> */ }
        {/* Modal End */}
        <div className="PostCard">
          <div className="post-area">
            <h1 className="PostText">
              <span role="img">📌</span> Posts <span role="img">📌</span>
            </h1>
            <div className="boxes">
              {filteredText.map(post => {
                return (
                  <div className="box" key={post.id}>
                    <h1 className="title">{post.name}</h1>
                    <p className="body">{post.desc_text}</p>
                    <a href={post.url} target="_blank" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
