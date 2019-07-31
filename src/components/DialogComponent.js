import React, { Component } from "react";
import Radium from 'radium';

import '../styles/theme.scss';
import logo from "../assets/react.png";

class DialogComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { title: 'mf-ske-dialog', sender: 'Ske-dialog', messageBack: '' }
    this.handleSubmit.bind(this)
  };

  render() {

    return (
      <div className={`container theme-selector ${this.props.theme}`}>

        <div className="header">
          <h2 className="title">{this.state.title}</h2>
          <img src={logo} className="app-logo" alt="logo" />
        </div>
        
        <form className="formContainer" onSubmit={this.handleSubmit.bind(this)}>
        <h3 className="title">Sender: {this.state.sender.toUpperCase()}</h3>

          <input type="text" name="messageBack" 
            value={this.state.messageBack} className="input-style"
            onChange={this.handleChangeText.bind(this)}
          />

          <button type="submit" className="btnStyle">Enviar</button>
          <br />

        </form>

        { this.renderLastMessage() }
        <small className="item">{this.props.messages.theme}</small>

      </div>
    )
  }

  /* Methods */
  handleChangeText(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent('DIALOG_VALUE_CHANGE', { 
        detail: { 
          sender: this.state.sender,
          message: this.state.messageBack,
          at: new Date().toISOString()
        } 
      })
    );
    this.setState({ messageBack: '' });
  }

  renderLastMessage() {
    if(this.props.messages.messages.length > 0) {
      let messages = this.props.messages.messages;
      let lastEmement = messages[messages.length -1];
      return (
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <p className="msgStyle">
            <span> last msg:</span> { lastEmement.message }
          </p>
          <p className="msgStyle"><small>
            <span>From: </span> {lastEmement.sender} 
            <span> AT:</span> {lastEmement.at}</small>
          </p>
        </div>
      );
    }
  }
}

export default DialogComponent = Radium(DialogComponent);
