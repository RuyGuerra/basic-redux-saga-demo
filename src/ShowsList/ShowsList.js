import React from 'react';
import './ShowsList.css';

const ShowsList = ({ term, shows }) => {
    return (
        <div className='shows-list-container'>
            {
            (shows.length > 0)
            ?<ul className='item-list'>{ renderShows(shows) }</ul>
            :noResult(term)
            }
        </div> 
    );
}

const renderShows = (shows) => {
    return (
        shows.map(item => (
            <li key={item.show.id}>{ item.show.name }</li>)
        )
    );
}

const noResult = (term) => {
    return (
        (term)
        ?<p>No Result</p>
        : null
    );
}

// const renderShows = (shows) => {
//     console.log('shows============: ', shows);
//     return (
//         (shows)
//         ? shows.map(item => (<li key={item.show.id}>{ item.show.name }</li>))
//         : 'null'
//     );
// }

// shows ? <li key={shows[1].show.key}>{ shows[1].show.name }</li> : null


export default ShowsList;