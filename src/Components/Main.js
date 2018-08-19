import React, {Component} from 'react';
import '../styles/stylesheets.css'
import { Photowall } from './Photowall';
import { AddPhoto } from './AddPhoto';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import * as actions from '../redux/actions';
import { Link } from 'react-router-dom';
import Single from './Single';


 class Main extends Component {

  constructor(){
    super();
  }

  componentDidMount() {
    this.props.startLoadingPost();
    this.props.startLoadingComments();
  }

  navigate() {
    this.setState({
      screen: 'addPhoto'
    })
  }
 
  render() {
    return (<div> 
             (
              
               <Route path="/" exact render={() => (
                  <div>
                  <h1><Link to="/">Photowall</Link></h1>
                  <Photowall {...this.props}/>
                  </div>
              )} />
              
             {<Route path="/addPhoto" render={({history}) => (
                  <AddPhoto {...this.props}/>
              
              )} />}

              <Route path="/single/:id" render={(params) => (
                 <Single {...this.props} {...params}/>
               )} />

    </div>);
  }
}

function mapSateToProps(state) {
  return {
      posts: state.posts,
      comments: state.comments
  } 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(mapSateToProps, mapDispatchToProps)(Main));
