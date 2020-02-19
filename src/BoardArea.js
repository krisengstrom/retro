import React from 'react';
import PostIt from './PostIt.js';

class BoardArea extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	postits: []
	  }

    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);

  }

  add(e) {
  	e.preventDefault();
  	this.setState({'postits': this.state.postits.concat({
  		text: this.inputNode.value
  	})});
  	console.log(this.state);
  	this.inputNode.value = '';
  }

  delete(child) {
  	console.log(child);
  	let replace = [];
  	for (let item of this.state.postits) {
  		if (item.text !== child.text) {
  			replace.push(item);
  		}
  	}
  	this.setState({'postits': replace});
  }

  render() {

  	const notes = this.state.postits.map((item) => 
  		<PostIt type={item.type} text={item.text} delete={this.delete}/>
  	);

  	return (
		<div className={`sub-board ${this.props.type}`}>
			<h2>{this.props.title}</h2>
			<form onSubmit={this.add} autoComplete="off">
				<input type="text" placeholder="Type something and hit enter" ref={node => (this.inputNode = node)}/>
				<button>+</button>
			</form>
			{notes}
		</div>
    );

  }

}

export default BoardArea;