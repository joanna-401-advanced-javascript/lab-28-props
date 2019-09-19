import React from 'react';
import Book from '../Book/Book';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World!',
    };
  }

  render(){
    return (
      <div>
        <p>{this.state.text}</p>
        <p>{this.props.headline}</p>
        <Book />
      </div>
    )
  }
}
