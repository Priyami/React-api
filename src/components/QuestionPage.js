import React from 'react';

class QuestionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
            answered: false,
            isCorrect: false
        }
    }

    render() {
        const question = this.props.question ? this.props.question.question : "loading ...";
        console.log(question);
        const step = this.props.question ? this.props.question.step : "loading ...";
        
        return <div> {question}
                <br />
                     {step} 
               </div> 
            
    }

}


export default QuestionPage