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
    if(this.props.run){
      this.setState({
          count: this.state.count + 1,
      })
    }
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.text} {this.state.count}</h1>
      </div>
    );
  }
}

function Activator(props) {
  return (
    <div>
        <button className={`mini ${props.active ?  "w--transition" : "w"}`} onClick={props.onClick}>{`${props.active ? "Deactivate" : "Activate"}`} second counter</button>
    </div>
  )
}

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      run: false,
    };
  }
  handleClick = () => this.setState({run: !this.state.run});
  render() {
    return (
      <div>
        <Activator onClick={this.handleClick}/>
        <Counter active={this.state.run} run={this.state.run} text="Togglable counter:"/>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Counter run={true} text="Amount of seconds since page load:"/>
    <Display />
  </div>
);