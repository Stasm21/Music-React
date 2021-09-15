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

    refreshPage = () => {
        window.location.reload();
      }

    render() {
        return (

            <div className="search-container">
                <h2 className="search-title" >Search</h2>

                <input onChange={this.handleChange} type="text" placeholder='keywords' className="filter_search"/><br />
                <p></p>
                <button onClick={ () => this.props.filterTitle(this.state.text.toLowerCase())}  className="" type="button">Title</button>
                <button onClick={ () => this.props.filterArtist(this.state.text.toLowerCase())}  className="" type="button">Artist</button>
                <button onClick={ () => this.props.filterAlbum(this.state.text.toLowerCase())}  className="" type="button">Album</button>
                <button onClick={ () => this.props.filterGenre(this.state.text.toLowerCase())}  className="" type="button">Genre</button>
                <button onClick={this.refreshPage}>Reset Search</button>
            </div>


        );
    }
}

export default FilterSong;
