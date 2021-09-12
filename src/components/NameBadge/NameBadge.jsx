import React from 'react';
import './NameBadge.css'




const NameBadge  = (props) => {
    return (
        <div>
            <br/>
            <h2>Song Library: </h2>
        <table>
            <thead>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
            </thead>
            {props.songs.map((song) => {
                return(
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <button onClick = {()=> props.delete(song.id)}>Delete Song</button>
                        </tr>
                );
            })}
        </table>
        </div>
    );
}

export default NameBadge;
