import { connect } from "react-redux";
import { Link } from "react-router-dom"

const MovieList = ({movies}, props) => {

    return (
        <div>
            <h3>Movie list</h3>
            {movies.map(movie => (<div key={"movie " + movie.id}>{<Link to={`/movies/${movie.id}`}>
                        {movie.name}
                    </Link>}</div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, null)(MovieList);