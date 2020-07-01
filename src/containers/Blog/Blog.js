import React, { Component } from 'react';
import classes from './Blog.module.css';
import TopPostTitles from './TopPostTitles/TopPostTitles';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

//import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import {Route, NavLink, Switch} from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';

const AsyncAddPost = asyncComponent(() => {
  return import('./AddPost/AddPost');
});

class Blog extends Component {
  state = {
    auth: true
  }

  render () {
    return(
      <Aux>
        <header className={classes.Links}>
          <nav>
            <ul>
              <li><NavLink activeClassName={classes.active} to='/posts/' exact>Posts</NavLink></li>
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

        <Switch>
          <Route path='/posts/' component={TopPostTitles} />
          {this.state.auth ? <Route path='/new-post' component={AsyncAddPost} /> : null}

          <Route render={() => <h1><center>Page Not Found!</center></h1>} />

          {/*<Redirect from='/' to='/posts/' component={TopPostTitles} />*/}
          <Route path='/' component={TopPostTitles} />
        </Switch>
      </Aux>
    );
  }
}

export default Blog;
