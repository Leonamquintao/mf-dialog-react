import React, { Component, Fragment } from 'react';
import DialogComponent from './components/DialogComponent';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Fragment>
        <DialogComponent {...this.props}/>
      </Fragment>
    );
  }
}

export default App;
