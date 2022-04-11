import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Movie.css'

function Movie({id, year, title, summary, poster, genre}) {
  return (
    <div className='movie'>
       <Link to={'/movie_detail'}
            state={{year, title, summary, poster, genre}}>
        <img src={poster} alt={title} title={title}></img>
            <div className='movie_data'>
                <h3 className='movie_title' style={{backgroundColor: '#eee'}}>{title}</h3>
                <h4 className='movie_year'>{year}</h4>
                <ul className='movie_genres'>
                    {genre.map((item, index) => {
                            return (<li key={index} className="movie_genre">{item}</li>)
                    })}
                {/* <ul className='movie_genres'>
                    {genre.map((item) => <li>{item}</li>)}
                </ul> 난 이렇게 하니까 나왔는데 선생님은 return 써야 나온대 */}

                </ul>
                <p className='movie_summary'>{summary.slice(0, 180)} ...</p>    
            </div>  
       </Link>      
    </div>
  )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie