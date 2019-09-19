import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author: 'Margaret Atwood',
      title: 'Oryx and Crake',
    }
  }

  render(){
    return (
      <div>
        <p>Author: {this.state.author}</p>
        <p>Title: {this.state.title}</p>
      </div>
    )
  }
}