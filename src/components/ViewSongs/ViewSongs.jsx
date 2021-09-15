import React from 'react';
import './ViewSongs.css'




const ViewSongs = (props) => {
    return (
        <div className="song-table">
            <table className="content-table">
                <thead className="thead-default">
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Delete Song</th>
                    </tr>
                </thead>
                <tbody>
                {props.songs.map((song, index) => {
                    return (
                            <tr className='Deats' key={index} >
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.genre}</td>
                                <td>{song.release_date}</td>
                                <td><button onClick={() => props.deleteSong(song.id)}>Delete</button></td>
                            </tr>
                    );
                    })}
                </tbody>

            </table>
        </div>
    );
}

export default ViewSongs;
