import React, {Component} from 'react';
import { Photo } from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export class Photowall extends Component{
  
  
  render() {
     return <div>
            <Link  to="/AddPhoto" className="addIcon"> Click me </Link>
            <div className="photoGrid">
              {(this.props.posts !== undefined) ? this.props.posts.
                sort((x,y) => {
                  return y.id - x.id;
                })
                .map((post, index) => <Photo key={index} index={index} post={post} {...this.props} />): ''}
            </div>
          </div>
  }
} 

Photowall.propTypes =  {
  posts: PropTypes.array.isRequired,
} 

