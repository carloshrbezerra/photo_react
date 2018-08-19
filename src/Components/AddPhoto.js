import React, {Component} from 'react'
import { Title } from './Title';

export class AddPhoto extends Component{
 
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
      event.preventDefault();
      const imageLink = event.target.elements.link.value;
      const description = event.target.elements.description.value;
      const post = {
        id: new Number(new Date()),
        description: description,
        imageLink: imageLink

    }


    if(imageLink && description) {
      
      this.props.startAddingPost(post);
      this.props.history.push('/')
    }  
  }
 
  render() {
      return (
      <div>
         <Title title={'Photowall'}/>  
        <div className="form">  
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="link" name="link"/>
            <input type="text" placeholder="Description" name="description"/>
            <button>Post</button>
          </form>
        </div>
        
        </div>
      
      )
  }
}