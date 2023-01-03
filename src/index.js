import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

class Main extends React.Component {
  render() {
    return (
      <div className="game">
        
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);