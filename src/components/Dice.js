import React, {component} from 'react';
import styled, {keyframes} from 'styled-components';
import { bounce, rollIn, rollOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { styles } from 'react-animations/lib/swing';
import { translate3d, compose, rotate3d } from 'react-animations/lib/utils';


const translateAndRotate = compose(translate3d, rotate3d);
class Dice extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      faceValue: 0,
      face: "&#x2680;",
      rollCount: 1,
      isRolling: false,
      bounce:{ 
        animation: '',
        animationDelay: ''
       },
       rollIn: '',
       rollOut: ''
      
    };
    this.DiceRoll = this.DiceRoll.bind(this);
    this.HandleDiceThrow = this.HandleDiceThrow.bind(this);
  }

  GenerateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  DiceRoll() {
    let faceValue = this.GenerateRandomInt(0, 5);          
    this.setState({      
      rollCount: this.state.rollCount - 1, 
      isRolling: (this.state.rollCount > 0),
      faceValue: faceValue,
      face: "&#x" + String(2680 + faceValue) + ";"
    });   
    this.setState({
      bounce: {
           animation: 'x 1s',
           animationDelay: '1s',
           animationName: Radium.keyframes(bounce, 'bounce')
          
      },
      
       
       rollOut: {
         From : {
            opacity: 100
          
           },
           animationName: Radium.keyframes(rollOut, 'rollOut')
         
        }
        
      })

  }

  HandleDiceThrow(){    
    if (this.state.isRolling)return;
    let val = this.GenerateRandomInt(5,15);
    this.setState({rollCount: val});
    for (let i = 0; i <= val; i++){
      setTimeout(this.DiceRoll, 250 * i);
    }
    this.setState({
      bounce:{ 
        animation: '',
        animationDelay: ''
      },
       rollOut: {
         
           to: {
            opacity: 100,
            transform: translateAndRotate(
                ['100%', 0, 1],
                [0, 0, 100, 120]
          )}
      }
    })
  }
  
  render() {
        

    return (
      
      <div>
           
        <StyleRoot>
          <div id = "diceFace"
                onClick={this.HandleDiceThrow} 
                dangerouslySetInnerHTML={{ __html: `${this.state.face}` }} style = {{...this.state.bounce,...this.state.rollOut}}>
      
          </div>
      </StyleRoot>
       {/*<span>Dice Value: {this.state.faceValue + 1}</span>  <br/>
        <span>Roll: {this.state.rollCount}</span> <br/>   */}   
      </div>
    );
  }
}
export default Dice