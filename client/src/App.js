import React, { Component } from "react";
import logo from "./zuto-logo.svg";
import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Impact 2022</h1>
                </header>
                <Container className="inputContainer" maxWidth="sm">
                    <body>
                        <p>What would you like to know?</p>
                        <TextField className="inputBox" fullWidth label="Type your question here" id="fullWidth" />
                        <Button className="inputButton" variant="contained">Submit Question</Button>
                    </body>
                </Container>
                
                <p className="App-intro">{this.state.apiResponse}hahaudhuq</p>
            </div>
        );
    }
}

export default App;