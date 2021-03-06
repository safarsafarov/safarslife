/* eslint-disable camelcase */
import React, { Component } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Moment, { now } from 'react-moment';
import { Link } from 'react-router-dom';

import 'moment/locale/fr';

import Loading from '../Loading/Loading';
import Button from '../Button/Button';

import './Post.scss';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      notFound: false,
      loading: false
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const uuid = url.replace('/articles/', '');

    this.setState({ loading: true }, () => {
      axios
        .get(`http://localhost:8000/posts/${uuid}`)
        .then(res => {
          this.setState({
            loading: false,
            post: res.data.data
          });
        })
        .catch(err => {
          this.setState({ notFound: true });
        });
    });
  }

  render() {
    const { post, notFound, loading } = this.state;

    if (loading) return <Loading />;
    if (notFound) {
      return (
        <div className="notfound" style={{ textAlign: 'center' }}>
          <h1>
          Oops! The page you are looking for does not exist.{' '}
            <span role="img" aria-label="sad">
              🥺
            </span>
          </h1>
          <p>
            While typing{' '}
            <strong style={{ fontWeight: 500 }}>
              {window.location.pathname}
            </strong>{' '}
            you may have<br />
            incorrectly entered the address where the page was moved.
            <span style={{ fontSize: '20px' }} role="img" aria-label="lel">
              {' '}
              🤷‍♂️
            </span>
          </p>

          <Link to="/">
            <Button text="Retourner à l'accueil" />
          </Link>
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="post-header">
            <h1>{post.title}</h1>

            <p>
              <Moment to={post.created_at}>{now}</Moment>
            </p>

            <img src={post.image} alt={post.title} />
          </div>

          <div className="post-content">
            <ReactMarkdown source={post.content} />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
