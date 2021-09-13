import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NameBadge from './NameBadge/NameBadge';
import AddSong from './AddSong/AddSong';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
    }


    componentDidMount(){
        this.getAllSongs();
    }



    async getAllSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data,
        });
    }


    async onDelete(id) {
        let response = await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        console.log(response)
        window.location.reload();
    }




    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <NameBadge songs={this.state.songs} deleteSong={this.onDelete}/>
                <AddSong />
            </div>
        );
    }
}

export default App;
