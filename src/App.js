import React, {Component} from 'react';
import Questions from './components/questions';


class App extends Component {
    render() {
        return (
	<React.Fragment>
            <Questions questions={this.state.questions} />
			
	</React.Fragment>
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