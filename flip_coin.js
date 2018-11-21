import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
  	let elem_to_render;
 		
    if (!fiftyFifty) {
      elem_to_render = "Tonight I'm going to bed WOOO"
    }else{
      elem_to_render = "Tonight I'm going out WOOO"
    }
    
  	return <h1>{elem_to_render}</h1>;
  }
};

ReactDOM.render(<TonightsPlan />, document.getElementById('app'));