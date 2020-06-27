import React, { Component } from 'react';
import classes from './Blog.module.css';
import TopPostTitles from './TopPostTitles/TopPostTitles';
import AddPost from './AddPost/AddPost';
import MiddlePost from './MiddlePost/MiddlePost';

import { Route, NavLink } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';

class Blog extends Component {
  render () {
    return(
      <Aux>
        <header className={classes.Links}>
          <nav>
            <ul>
              <li><NavLink activeClassName={classes.active} to='/' exact>Home</NavLink></li>
              <li><NavLink activeClassName={classes.active} to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/*<Route path='/' exact render={() => <h1>Home</h1>}/>
        <Route path='/new-post' exact render={() => <h1>This is our new page!</h1>}/>*/}

        <Route path='/' exact component={TopPostTitles} />
        <Route path='/new-post' component={AddPost} />
        <Route path='/:id' component={MiddlePost} />
      </Aux>
    );
  }
}

export default Blog;
