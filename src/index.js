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
        <h1>Amount of seconds since page load: {this.state.count}</h1>
      </div>
    );
  }
}

// change to component later to allow for enabling/disabling counter
function Activator() {
  function handleClick() {
    console.log("activate");
  }
  return (
    <button className="w" onClick={handleClick}>Activate second counter</button>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Counter />
    <Activator />
  </div>
);