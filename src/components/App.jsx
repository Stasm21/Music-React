import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ViewSongs from './ViewSongs/ViewSongs';
import AddSong from './AddSong/AddSong';
import FilterSong from './FilterSong/FilterSong';



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

    filterTitle = (text) => {
        const song = this.state.songs.filter((song) => song.title.toLowerCase().includes(text))
        this.setState({
            songs: song
        });
    }

    filterArtist = (text) => {
        const song = this.state.songs.filter((song) => song.artist.toLowerCase().includes(text))
        this.setState({
            songs: song
        });
    }

    filterAlbum = (text) => {
        const song = this.state.songs.filter((song) => song.album.toLowerCase().includes(text))
        this.setState({
            songs: song
        });
    }

    filterGenre = (text) => {
        const song = this.state.songs.filter((song) => song.genre.toLowerCase().includes(text))
        this.setState({
            songs: song
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Song List</h1>
                <ViewSongs songs={this.state.songs} deleteSong={this.onDelete}/>
                <AddSong />
                <FilterSong shoebox={this.state.songs} filterTitle={this.filterTitle} filterArtist={this.filterArtist} filterAlbum={this.filterAlbum} filterGenre={this.filterGenre}/>

            </div>
        );
    }
}

export default App;
