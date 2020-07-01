import React, {Component} from 'react';
import classes from './MiddlePost.module.css';
import axios from 'axios';

class MiddlePost extends Component {
  state = {
    loadedPost: null
  }

  componentDidMount(){
    this.loadMiddlePost();
  }

  componentDidUpdate(){
    this.loadMiddlePost();
  }

  loadMiddlePost(){
    console.log('middle post: ', this.props);
    if(this.props.match.params.id){
      if(!this.state.loadedPost || (+this.props.match.params.id !== this.state.loadedPost.id)){
        //console.log('first:', this.props.match.params.id);
        //console.log('second: ', this.state.loadedPost.id);
        axios.get('/posts/' + this.props.match.params.id)
          .then(response => {
            //console.log('response: ', response);
            this.setState({loadedPost: response.data});
            //console.log('second: ', this.state.loadedPost.id);
          });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.match.params.id)
      .then(response => {
        console.log(response);
      });
  }

  render() {
    const styles = {
      color: 'red',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '15px',
      cursor: 'pointer'
    }

    let showPost = <h1 style={{textAlign: 'center', color: 'red', textTransform: 'uppercase'}}>
      This is the middle component!</h1>

    if(this.props.id){
      showPost = <h2 style={{textAlign: 'center', color: 'red', textTransform: 'uppercase'}}>
        Loading...</h2>
    }

    if(this.state.loadedPost) {
      showPost = (
        <div className={classes.box}>
          <p
            style={{fontWeight: 'bold', fontSize: '25px', padding: '0', margin: '0'}}>
            {this.state.loadedPost.title}
          </p>

          <p>{this.state.loadedPost.body}</p>
          <button style={styles} onClick={this.deletePostHandler}>delete</button>
        </div>
      );
    }
    return showPost;
  }
}

export default MiddlePost;
