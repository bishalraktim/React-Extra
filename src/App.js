import React, {Component} from 'react';
import Aux from './hoc/Aux/Aux';
import Blog from './containers/Blog/Blog';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render(){

    return (
      <Aux>
        <BrowserRouter>
          <Blog />
        </BrowserRouter>
      </Aux>
    );
  }
}

export default App;
