import React, { Component } from 'react';
// import axios from 'axios'
import './FilterSong.css'


class FilterSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }


    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.addNewsong(this.state)
    // }



    render() {
        return (

            <div>
                <h2>Search Song by Filter</h2>

                <button onClick={ () => this.props.filterTitle(this.state.text.toLowerCase())}  className="" type="button">Title</button><br />
                <button onClick={ () => this.props.filterArtist(this.state.text.toLowerCase())}  className="" type="button">Artist</button><br />
                <button onClick={ () => this.props.filterAlbum(this.state.text.toLowerCase())}  className="" type="button">Album</button><br />
                <button onClick={ () => this.props.filterGenre(this.state.text.toLowerCase())}  className="" type="button">Genre</button><br />
                <input onChange={this.handleChange} type="text" placeholder='keywords'/><br />

            </div>


        );
    }
}

export default FilterSong;
