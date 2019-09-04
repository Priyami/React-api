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
        return <div>{question}</div>
    }

}


export default QuestionPage