import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

export class Photo extends Component {
  
  
  render () {
     const post = this.props.post;
     return <figure className="figure">
                <Link to={`single/${post.id}`}>
                   <img className="photo" src={post.imageLink} alt={post.description}/>
                </Link>
                
                <figcaption><p>{post.description}</p></figcaption>
                <div className="button-container">
                  <button className="remove-button" onClick={() => {
                      this.props.startRemovingPost(this.props.index, post.id);
                      this.props.history.push('/')
                  }}> Remove </button>
                  <Link className="button" to={`single/${post.id}`}> 
                    <div className="speech-bubble"></div>
                    <div className="comment-count">
                        {this.props.comments[post.id] ? this.props.comments[post.id].length : 0}
                    </div>
                  </Link>
                </div>
            </figure>;
  }
}


function mapSateToProps(state) {
  return {
    posts: state
  }
}

Photo.propType = {
  post: PropTypes.array.isRequired,
}

export default connect(mapSateToProps)(Photo);