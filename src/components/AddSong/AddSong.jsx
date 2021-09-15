import React, { Component } from 'react';
import axios from 'axios';
import './AddSong.css'



class AddSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: ''
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addNewsong(this.state)
    }

    async addNewsong() {
        let song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date,
        }
        try {
            let response = await axios.post('http://127.0.0.1:8000/music/', song);
            console.log(response)
            window.location.reload();
        }
        catch (error) {
            console.log('Song not added, please try again');
        }
    }

    filterByDetail = () => {

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <div className="add-song">
                        <h2 className="add-song-title">Add New Song</h2>
                        <label></label>
                        <input type="text" name='title' onChange={this.handleChange} value={this.title} placeholder="Title"/><br />
                        <label></label>
                        <input type="text" name='artist' onChange={this.handleChange} value={this.artist} placeholder="Artist"/><br />
                        <label></label>
                        <input type="text" name='album' onChange={this.handleChange} value={this.album} placeholder="Album"/><br />
                        <label></label>
                        <input type="text" name='genre' onChange={this.handleChange} value={this.genre} placeholder="Genre"/><br />
                        <label></label>
                        <input type="DatePicker" name='release_date' onChange={this.handleChange} value={this.release_date} placeholder='YYYY-MM-DD "release date'/><br />
                        <input className="add-butt" type="submit" value='Add to Playlist' />
                    </div>
            </form>
        );
    }
}


export default AddSong
