import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <section>
        PostsLists
      </section>
    )
  }
}

const mapStateToProps = (state) => {
}

export default connect(null, { fetchPosts: fetchPosts })(PostsList);