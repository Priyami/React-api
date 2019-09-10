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
    if(this.state.value === this.props.question.answer){
        this.setState({isCorrect: !this.state.isCorrect});
        this.setState({display: !this.state.display});
        alert("The answer is correct");
        console.log(this.state.isCorrect);
        console.log(this.state.display);
    }
    else{
        alert("The answer is wrong");
         this.setState({display: this.state.display});
    }
    event.preventDefault();
    }


    render() {
        const question = this.props.question ? this.props.question.question : "loading ...";
        console.log(question);
        const step = this.props.question ? this.props.question.step : "loading ...";
        const classNameBtn = this.state.isCorrect ? 'button-right' : 'button-wrong';
        console.log(classNameBtn);
        const classNameToggle = !this.state.display ? 'button-add' : classNameBtn;
        
        console.log(classNameToggle);
        

        

        return <div> {question}
                <br />
                     {/* {step}  */}

                 <form onSubmit={this.handleSubmit}>
                    <label> <input type="text" value={this.state.value} onChange={this.handleChange} className = "text-add"/> </label>
                    
                   <input type= "submit"  value=""  className = {classNameToggle}/>
                   
                </form>
               </div>

              
                
            
    }

}


export default QuestionPage