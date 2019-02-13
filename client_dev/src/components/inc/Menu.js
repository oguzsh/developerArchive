import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "#9F44D3"
  }
};

Modal.setAppElement("#root");

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      tags: {
        web: "web",
        javascript: "js",
        seo: "seo"
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.openModal}>
          Categories
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          className="menu"
          contentLabel="Categories"
        >
          <div className="menu">
            <div className="container">
              <a id="button" onClick={this.closeModal} className="closeBtn">
                X
              </a>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" tag={this.state.tags.web}>
                    ✨ HTML/CSS ✨
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tag="js">
                    ⚡️ JAVASCRIPT ⚡️️
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tag="seo">
                    🌀 SEO 🌀
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tag="uiux">
                    📐 UI/UX 📐
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tag="ai">
                    🌍 AI 🌍
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tag="angular">
                    🔮 ANGULAR 🔮
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tag="csharp">
                    🌋 C# 🌋
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tag="python">
                    🐍 PYTHON 🐍
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tag="java">
                    ☕️ JAVA ☕️
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tag="kotlin">
                    🍺 KOTLIN 🍺
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Menu;
