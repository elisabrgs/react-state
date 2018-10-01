import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        working: true
    };
  }
  handleClick = () => {
      this.setState({ working: !this.state.working });
  };
  render() {
    const logoanim = this.state.working ? 'App-logo' : 'App-logo-2';
    const buttonText = this.state.working ? 'Working' : 'Not working';
    return (


      <div className="App">
        <header className="App-header">
          <img src={logo} className={logoanim} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button
          onClick={this.handleClick}
        >          
          {buttonText}
        </button>
        <Lamp on />
        <Lamp />
        <Quotes/>
      </div>


    );

  }
}

export default App;




