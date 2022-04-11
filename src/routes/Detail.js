import React from 'react'
import {useLocation} from 'react-router-dom'
import './Detail.css'

function Detail() {
    const location = useLocation(); //주소창에 있는 정보 가져오는 역할함
    console.log(location)
    const {poster, title, year, genre, summary} = location.state;

  return (
    <div className='detail'>
        <img src={poster} alt={title} title={title}></img>
            <div className='detail_data'>
                <h3 className='detail_title' style={{backgroundColor: '#eee'}}>{title}</h3>
                <h4 className='detail_year'>{year}</h4>
                <ul className='detail_genres'>
                    {genre.map((item, index) => {
                            return (<li key={index} className="detail_genre">{item}</li>)
                    })}
                {/* <ul className='movie_genres'>
                    {genre.map((item) => <li>{item}</li>)}
                </ul> 난 이렇게 하니까 나왔는데 선생님은 return 써야 나온대 */}

                </ul>
                <p className='detail_summary'>{summary.slice(0, 180)} ...</p>    
            </div>  
    </div>
  )
}

export default Detail