import React from 'react'

// import DataProvider from './DataProvider'
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({ title, posterUrl, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster posterUrl={posterUrl} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>

                <div className="Movie__Synopsis">
                <LineEllipsis 
                    text = {synopsis}
                    maxLine = '3'
                    ellipsis = '...'
                    trimRight
                    basedOn = 'letters'>
                </LineEllipsis>
                    
                </div>
            </div>
            
        </div>
    );
}

function MoviePoster({ posterUrl, alt }) {
    return (
        <img src={posterUrl} alt={alt} title={alt} className="Movie__Poster"/>
    );
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    posterUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;

// class Movie extends Component {

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         posterUrl: PropTypes.string.isRequired
//     }

//     constructor(props) {
//         super(props);


//         // this.props = value;
//         // this.props = {};
//         // this.props.key = value.key;
//         // this.props.title = value.title;
//         // this.props.posterUrl = value.posterUrl;

//         // this.title = title;
//         // this.posterUrl = posterUrl;
//         console.log(this)
//     }

//     static getMovies(maxNum) {
//         var movieData = DataProvider.of().getMovieData(maxNum);
//         console.log(movieData)
//         return movieData.map(value => new Movie(value));
//     }

//     static toJSX(movie) {
//         return <Movie {...movie.props} />;
//         // props = {key="1", title="title", poster="poster"}
//         // return <Movie key={movie.props.key} title={movie.props.title}
//     }

//     render() {
//         // console.log(this.props);
//         return (
//             <div>
//                 <MoviePoster posterUrl={this.props.posterUrl}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         );
//     }
// }
