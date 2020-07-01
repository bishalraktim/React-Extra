import React, {Component} from 'react';
import classes from './AddPost.module.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class AddPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Michael',
    submitted: false
  }

  postDataHandler = () => {
    const posts = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };

    axios.post('/posts', posts)
    .then(response => {
      console.log(response);
      this.props.history.push('/posts');
      //this.setState({submitted: true});
    });
  }

  componentDidMount(){
    console.log('add post: ', this.props);
  }

  render() {

    const styles = {
      margin: '8px',
      cursor: 'pointer',
      color: 'blue',
      border: '1px solid red',
      padding: '10px',
      fontWeight: 'bold',
      fontSize: '15px'
    }

    let redirect = null;
    if(this.state.submitted){
      redirect = <Redirect to='/' />;
    }

    return(
      <div className={classes.box}>
        {redirect}
        <p style={{fontWeight: 'bold', fontSize: '25px', paddingTop: '2px'}}>Add a Post </p>
        <p style={{fontWeight: 'bold'}}>Title</p>

        <input
          style={{width: '73%', outline: 'none'}}
          type='text'
          value={this.state.title}
          onChange={(event) => this.setState({title: event.target.value})}
        />

        <p style={{fontWeight: 'bold'}}>Content</p>

        <textarea
          style={{width: '73%', outline: 'none'}}
          value={this.state.content}
          onChange={(event) => this.setState({content: event.target.value})}
        />

        <p style={{fontWeight: 'bold'}}>Author</p>

        <select
          style={{width: '73%', outline: 'none'}}
          value={this.state.author}
          onChange={(event) => this.setState({author: event.target.value})}>
          <option>Max</option>
          <option>Michael</option>
        </select>

        <div>
          <button style={styles} onClick={this.postDataHandler}>Add Post</button>
        </div>
      </div>
    );
  }
}

export default AddPost;
