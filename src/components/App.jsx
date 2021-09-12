import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NameBadge from './NameBadge/NameBadge';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: {}
        }
    }


    componentDidMount(){
        this.getAllSongs();
    }



    async getAllSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music');
        this.setState({
            songs: response.data,
        });
    }



    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <NameBadge songs={this.state.songs}/>
            </div>
        );
    }
}

export default App;
