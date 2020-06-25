import React, {Component} from 'react';
import Aux from './hoc/Aux/Aux';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render(){

    return (
      <Aux>
        <Blog />
      </Aux>
    );
  }
}

export default App;
