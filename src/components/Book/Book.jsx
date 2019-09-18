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
        <p>{this.state.author}</p>
        <p>{this.state.title}</p>
      </div>
    )
  }
}