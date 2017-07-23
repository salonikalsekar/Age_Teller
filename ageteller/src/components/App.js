import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component{
    render(){
        return(
            <div className="App">
                <h2>Input your Birthday!</h2>
                <Form inline>
                    <FormControl type="date">
                    </FormControl>
                    {' '}
                    <Button>
                        Submit
                    </Button>
                </Form>
            </div>

        )
    }
}

export default App;
