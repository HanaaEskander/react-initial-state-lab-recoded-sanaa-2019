// your Bomb code here!
import React, {Component} from 'react';

 class Bomb extends Component{
  constructor(props) {
  super(props)
  this.state = {
    secondsLeft: this.props.initialCount
  }
}
  widgetText = () =>{
    if(this.state.secondsLeft !== 0){
      return (<p>{this.state.secondsLeft} seconds left before I go boom!</p>);
    }else{
      return (<p>Boom!</p>);
    }
  }
  render(){
    return(
      <div>{this.widgetText()}</div>
    );
  }
}
export default Bomb;