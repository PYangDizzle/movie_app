import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
// import { setTimeout } from 'timers';

// const movieTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Old Boy",
//   "Star Wars"
// ]

// const movieImages = [
//   "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
//   "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fA528iSussglbJOb0HJHOubtL7ApVBdz1QHGOCOsgVGGZ28u",
//   "https://disfi.com/wp-content/uploads/2018/09/star-wars.jpg"
// ]

// const movieData = 



// const st = {
//   greeting: 'Hello again 3 times!'
// }

function log(str) {
  console.log(str);
  return str;
}

class App extends Component {

  componentWillMount() {
    console.log("will mount")
  }

  componentDidMount() {
    console.log("did mount")

    // const test = this._getMovies();

    // console.log("do A")
    // test.then(o => console.log("do B after getMOvies and A"));
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
        key={movie.id} 
        title={movie.title_english}
        posterUrl={movie.large_cover_image}
        genres={movie.genres}
        synopsis = {movie.synopsis}
        />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
      .then(resp => resp.json())
      .then(log)
      .then(json => json.data.movies)
      // .then(json => 
      //   json.data.movies.map(m => {
      //   return {title: m.title, poster: m.medium_cover_image};
      // }))
      // .then(movies => this.setState({movies: movies}))
      .catch(console.error);
  }

  state = {

  }

  render() {
    console.log("did render")

    const { movies } = this.state;
    // const naiveMovies = this.state.movies;
    // console.log("this.state")
    // console.log(this.state)
    // console.log("movies")
    // console.log(movies)

    // console.log("naivemovies")
    // console.log(naiveMovies)
    return (

      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
        {/* {jsxMovies} */}
      </div>
    );
  }
}

export default App;


// var maxMovieNum = 4;

    // var movies = Movie.getMovies(maxMovieNum);
    // console.log(movies);



    // var jsxMovies = movies.map(m => Movie.toJSX(m));
    // console.log(jsxMovies);
    // var jsx = <Movie key="23" />;
    // console.log(jsx);

    // movies.map MyMovie.App

    // myMovies.capitalizeTitles();
    // mayMovies.randomizePosters();

