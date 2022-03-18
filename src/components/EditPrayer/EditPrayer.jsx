import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';


function EditPrayer() {

    const history = useHistory();
    

    const movie = useSelector(store => store.selectedMovie)
    const genres = useSelector(store => store.genres)

   

    function handleClick(){
        history.push('/');
    }
    return (
        <>
            <h1>Movie Details</h1>
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <img src={movie.poster} alt={movie.title}/>
                    <br />
                    <h4>{movie.description}</h4>
                    <button onClick={handleClick}>Go back</button>
                </div>
        
                <div>
                {genres.map((genre, i) => {
                    return(
                    <div key={i}>
                        <h1>{genre.name}</h1>
                    </div>
                    )
                })}
                </div>
        </>
    )
}

export default EditPrayer;