import React, {Component} from 'react';
import axios from '../../axios';
import classes from './Blog.module.css';

import Aux from '../../hoc/Aux/Aux';
import AddPost from '../../components/AddPost/AddPost';
import MiddlePost from '../../components/MiddlePost/MiddlePost';
import TopPostTitle from '../../components/TopPostTitle/TopPostTitle';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount() {
    axios.get('/posts')
        .then(response => {
          //console.log(response);
          const posts = response.data.slice(0, 4);
          const updatedPost = posts.map(post => {
            return {
              ...post,
              author: 'Raktim'
            }
          });
          this.setState({posts: updatedPost});
          //console.log('posts: ', this.state.posts);
        })
        .catch(error => {
          this.setState({error: true});
        });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
  }

  render () {
    let posts = <div className={classes.errors}>Something went wrong!</div>;

    if(!this.state.error){
      posts = this.state.posts.map(post => {
        return <TopPostTitle
          title={post.title}
          key={post.id}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id) }/>
      });
    }

    return(
      <Aux>
        <section style={{display: 'flex', flexFlow: 'wrap'}}>
          {posts}
        </section>
        <MiddlePost id={this.state.selectedPostId} />
        <AddPost />
      </Aux>
    );
  }
}

export default Blog;
