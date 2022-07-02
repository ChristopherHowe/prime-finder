import React, { useState } from 'react'
import './App.css';

async function createPostRequest(data) {
    const responseOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    };
    const response = await fetch('http://127.0.0.1:80/postData', responseOptions)
    return response.json()
}

function sendData(new_input) {
    console.log("Im here")
    createPostRequest({ new_input: new_input })
        .then(data => {
            console.log(data); 
        });
}


function PrimeInput() {
    const[newInput,setInput] = useState(0)
    const onSubmit = async (event) => {
        event.preventDefault();
    };

    console.log(newInput);
    return (
        <form onSubmit={onSubmit}>
            <input type="number" name="new_input" onChange={(event) => setInput(event.target.value)} ></input>
            <button type="submit" onClick={sendData(newInput)}> Is it prime? </button>
        </form>
    );
}


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prime: true,
            didInput: false,
            databaseVal: 0
        }
    }


    componentDidMount() {
        /*console.log("database prime is being loaded")
        fetch("http://localhost:80/is-prime")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    prime: json["prime"],
                })
            });*/
        //fetch("http://localhost:80/is-prime")
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Welcome to the prime finder App.</h2>
                    <p>Enter a Number below</p>
                    <PrimeInput/>
                    <p>{this.state.prime ? "Yes its prime!" : "No its not prime"}</p>
                    <p>current database number</p>
                    <p>{this.state.databaseVal }</p>
                </header>
            </div>
        );
    }

}

export default App;
