import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts)
    return(
      <section>
        PostsLists
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsList);