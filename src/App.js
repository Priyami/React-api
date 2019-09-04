import React, {Component} from 'react';
import Questions from './components/questions';

class App extends Component {
    render() {
        return (
            <Questions questions={this.state.questions} />
        )
    }

    state = {
        questions: []
    };

    componentDidMount() {
        fetch('./math.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ questions: data })
            })
            .catch(console.log)
    }
}

export default App;