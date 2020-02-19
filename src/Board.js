import React from 'react';
import BoardArea from './BoardArea.js';

class Board extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
    	<div className="board">
    		<BoardArea type='good' title='What went well?'/>
    		<BoardArea type='bad' title='What didnt go well?'/>
    		<BoardArea type='other' title='Other'/>
    	</div>);
  }

}

export default Board;