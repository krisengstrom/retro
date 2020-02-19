import React from 'react';

class PostIt extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <div className={`post-it ${this.props.type}`}>
		<button className="delete" onClick={() => this.props.delete(this.props)}>X</button>
    	<div className="content">
    		{this.props.text}
    	</div>
    </div>;
  }

}

export default PostIt;