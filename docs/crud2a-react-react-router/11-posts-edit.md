---
title: Step11 PostsEdit
---

**PostsEditPage** is a combination of **PostsShowPage** and **PostsNewPage**.
1. Fetch post by using `:id` and set initial form value
2. Send PUT request for updating post

`src/pages/PostsEditPage.js`:
```js
import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";

import { getAccessToken } from "../utils/auth";

class PostsEditPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: null,
      title: "",
      content: "",
      isSubmitting: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    // https://reacttraining.com/react-router/web/api/Route/component
    // https://stackoverflow.com/questions/35352638/react-how-to-get-parameter-value-from-query-string
    const { id } = this.props.match.params

    axios.get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        const post = res.data;
        const { title, content } = post;
        this.setState({
          isLoaded: true,
          post,
          title,
          content
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      isSubmitting: true
    })

    const { id } = this.props.match.params
    const { title, content } = this.state;


    axios.put(`http://localhost:3000/posts/${id}/`, {
      title,
      content
    }, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`
      },
    })
      .then((res) => {
        const post = res.data;
        this.props.history.push(`/posts/${post.id}`);
      })
      .catch((error) => {
        this.setState({
          isSubmitting: false,
          error
        });
      })
  }

  render(){
    const { title, content, error, isSubmitting, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return(
        <>
          <h1>Posts#Edit</h1>
          <div>{error && error.message}</div>
          <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input name="title" type="text" value={title} onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            Content:
            <input name="content" type="text" value={content} onChange={this.handleInputChange} />
          </label>
          <br/>
          <input type="submit" value="Submit" disabled={isSubmitting} />
        </form>
        </>
      )
    }    
  }
}

export default withRouter(PostsEditPage);
```

