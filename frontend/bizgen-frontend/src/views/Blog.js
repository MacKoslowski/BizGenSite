import React from 'react';
import { getBlogPosts, auth, db} from '../firebase_setup';
import { signInAnonymously } from "firebase/auth";
import {Card} from 'react-bootstrap';
class Blog extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      blog_posts: []
    };
  }

  componentDidMount() {
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
        let result = getBlogPosts(db);
        result.then((posts) => {
          console.log(posts)
          this.setState({blog_posts: posts})
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        alert(errorCode, errorMessage)
      });
    
  }

  render() {
    let blog_post_cards = this.state.blog_posts.map(post => {
      const date = post.date.toDate().toDateString()  
      console.log(date)
      return (
        <div key={Math.random()}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
              <Card.Text>
                {post.title}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    });
    return (
      <div>
        <h5>Blog Posts</h5>
        {blog_post_cards}
      </div>
    );
  }

}

export default Blog;