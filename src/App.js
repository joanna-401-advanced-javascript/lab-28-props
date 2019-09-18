import React from 'react';
import Message from './components/Message/Message';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headline: 'app text',
    }
  }
  render() {
    return (
      <>
        <Message headline={this.state.headline}/>
      </>
    );
  }
}

export default App;
