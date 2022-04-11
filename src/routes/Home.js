
import axios from 'axios';
import React, { Component } from 'react'
import Movie from '../components/Movie';
import './Home.css';

export class Home extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    // >> axios는 이런형태로 사용해줘야 함
    console.log(movies) // >> 위에 movies를 의미한다 movies.data.data.movies
    this.setState({isLoading: false, movies});
    //      >>> 키와 키값이 동일할때는 하나만 쓸 수 있음 movies: movies
  } 


  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 6000)

    // axios.get('https://yts-proxy.now.sh/list_movies.json'); >> 이렇게사용하면 느려서 별도의 함수만들어 사용한다
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state; //구조분해할당
    return (
      <section className='container'>
        {isLoading ? 
          (<div className='loader'>
            <span className='loader_txt'>'Loading...'</span>
          </div>) : 
          (<div className='movies'>
            {movies.map((movie, index) => (<Movie
                    key = {index}
                    id = {movie.id}
                    year = {movie.year}
                    title = {movie.title}
                    summary = {movie.summary}
                    poster = {movie.medium_cover_image}
                    genre = {movie.genres}
          />))}
          </div>)
        }
      </section>
    )
  }
}

export default Home