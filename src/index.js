import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.status = {
      count: 0,
    };
  }

  onMount() {

  }

  onUnmount() {

  }
  
  render() {
    return (
      <div>
        <h1>Amount of seconds since page load: {this.status.count}</h1>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);