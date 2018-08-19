import React, {Component} from 'react';

export class List extends Component {
  render() {
    return (<ol> 
            {this.props.tasks.map((task,i) => <li key={i}>{task}</li>)} 
          </ol>);
  }
}