import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async() => {

    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);

    this.setState({
      movies,    // movies: movies와 같음
      isLoading: false
    });

    // 이 방법은 나중에 별로일 듯
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
  }

  // render 전에 동작
  async componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <div>
        {isLoading ? "Loading" : movies.map(movie => {
        return (
          <Movie key={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
        );
      })}
      </div>
    );
  }
}

export default App;
