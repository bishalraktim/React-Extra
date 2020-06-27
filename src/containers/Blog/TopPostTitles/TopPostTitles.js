import React, {Component} from 'react';
import TopPostTitle from '../../../components/TopPostTitle/TopPostTitle';
import axios from '../../../axios';
import classes from './TopPostTitles.module.css';
import { Link } from 'react-router-dom';

 class TopPostTitles extends Component {
   state = {
     posts: [],
     selectedPostId: null,
     error: false
   }

   componentDidMount() {
     console.log(this.props);
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

   render(){
     let posts = <div className={classes.errors}>Something went wrong!</div>;

     if(!this.state.error){
       posts = this.state.posts.map(post => {
         return(
           <Link to={'/' + post.id} key={post.id}
            style={{
              textDecoration: 'none',
              width: '35%',
              margin: '1% 1%',
              color: 'inherit'}}>
             <TopPostTitle
             title={post.title}
             author={post.author}
             clicked={() => this.postSelectedHandler(post.id) }/>
           </Link>);
       });
     }

     const styles = {
       display: 'flex',
       flexFlow: 'wrap'
     }

     return(
       <section style={styles}>
         {posts}
       </section>
     );
   }
 }

 export default TopPostTitles;
