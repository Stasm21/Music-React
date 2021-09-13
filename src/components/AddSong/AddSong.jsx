import React, { Component } from 'react';
import axios from 'axios';



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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" name='title' onChange={this.handleChange} value={this.title}/>
                        <label>Artist:</label>
                        <input type="text" name='artist' onChange={this.handleChange} value={this.artist}/>
                        <label>Album:</label>
                        <input type="text" name='album' onChange={this.handleChange} value={this.album}/>
                        <label>Genre:</label>
                        <input type="text" name='genre' onChange={this.handleChange} value={this.genre}/>
                        <label>Release Date:</label>
                        <input type="DatePicker" name='release_date' onChange={this.handleChange} value={this.release_date} placeholder='YYYY-MM-DD'/>
                    </div>
                <input type="submit" value='Submit' />
            </form>
        );
    }
}


export default AddSong
