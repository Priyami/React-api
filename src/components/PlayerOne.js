import React from 'react';
import Radium, {StyleRoot} from 'radium';

class PlayerOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
	  bgcolor: 'red',
	  faceValue: this.props.faceValue
      
    };
    this.PlayerOneGame = this.PlayerOneGame.bind(this);
    
  }

  

  PlayerOneGame() {
            
    
  }

  
  
  render() {
        

    return (
      
      <div>
       <StyleRoot>
          <button id = "diceFace"
                onClick={this.PlayerOneGame} 
                dangerouslySetInnerHTML={{ __html: `${this.state.bgcolor}` }} >
      
         </button>
       </StyleRoot>
	 
	
	  Dice Value: {this.state.faceValue + 1} 
	  			Roll: {this.props.rollCount} 
	 </div>
    );
  }
}
export default PlayerOne