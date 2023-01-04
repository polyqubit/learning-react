import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.increment = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.increment);
  }

  tick() {
    this.setState({
      count: this.state.count + 1,
    })
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.text} {this.state.count}</h1>
      </div>
    );
  }
}

class Activator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }
  handleClick() {
    this.setState({
      active: !this.state.active,
    })
  }
  // create child Counter of Activator
  // lift counting state up so that Counter -> Display(?)
  render() {
    return (
      <div>
        <button className={`mini ${this.state.active ?  "w--transition" : "w"}`} onClick={()=>this.handleClick()}>{`${this.state.active ? "Deactivate" : "Activate"}`} second counter</button>
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    return (
      <div>
        <Activator />
        <Counter text="Togglable counter:"/>
      </div>
    )
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Counter text="Amount of seconds since page load:"/>
    <Display />
  </div>
);