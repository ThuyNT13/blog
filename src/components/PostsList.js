import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsList extends Component {
  componentDidMount() {
    // console.log(this.props.fetchPosts()); // PromiseStatus: resolved
    this.props.fetchPosts();
  }

  renderList() {
    // console.log(this.props.posts[0]); // prints first post, id:1
    return this.props.posts.map((post) => {
      // console.log(post); // iterates through posts and prints each post
      return(
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"/>
          <div className="content">
            <article className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <section className="ui relaxed divided list">
        {this.renderList()}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsList);