import React from 'react'
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prime: true,
            didInput: false
        }

    }
    componentDidMount() {
        console.log("content is being loaded")
        fetch("http://localhost:80/is-prime")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    prime: json["prime"],
                })
            });
        
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Welcome to the prime finder App.</h2>
                    <p>Enter a Number below</p>
                    <form action="http://127.0.0.1:80/postData" method="post" name="myForm">
                        <input type="number" name="new_input"></input>
                        <button type="submit"> Is it prime? </button>
                    </form>
                    <p>{this.state.prime ? "Yes its prime!" : "No its not prime"}</p>
                </header>
            </div>
        );
    }

}

export default App;
