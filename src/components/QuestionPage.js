import React from 'react';


class QuestionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
            answered: false,
            isCorrect: false,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
    this.setState({value: event.target.value});
    }

    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    }

    render() {
        const question = this.props.question ? this.props.question.question : "loading ...";
        console.log(question);
        const step = this.props.question ? this.props.question.step : "loading ...";
        
        return <div> {question}
                <br />
                     {step} 

                 <form onSubmit={this.handleSubmit}>
                    <label> <input type="text" value={this.state.value} onChange={this.handleChange} /> </label>
                    <input type="submit" value="" className = "button-add" />
                </form>
               </div>

              
                
            
    }

}


export default QuestionPage