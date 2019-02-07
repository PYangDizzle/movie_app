
class DataProvider {
  static of() {
    return new DataProvider();
    // return new APIDataProvider();
  }

  getMovieData(maxNum) {
    return movieData.slice(0, maxNum);
    // var result = {};
    // result.title = "Hi";
    // result.posterUrl = "ERE";
    // return [result];
  }
}

export default DataProvider;

class MovieData {
  constructor(key, title, poster) {
    this.title = title;
    this.posterUrl = poster;
    this.key = key;
  }
}

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Old Boy",
  "Star Wars"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
  "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fA528iSussglbJOb0HJHOubtL7ApVBdz1QHGOCOsgVGGZ28u",
  "https://disfi.com/wp-content/uploads/2018/09/star-wars.jpg"
]

// const movieData = 

const movieData = [
  new MovieData(0, movieTitles[0], movieImages[0]),
  new MovieData(1, movieTitles[1], movieImages[1]),
  new MovieData(2, movieTitles[2], movieImages[2]),
  new MovieData(3, movieTitles[3], movieImages[3])
]
