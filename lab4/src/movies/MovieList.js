import { connect } from "react-redux";

const MovieList = ({movies}, props) => {

    return (
        <div>
            <h3>Movie list</h3>
            {movies.map(movie => (<div>{movie.name}</div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, null)(MovieList);