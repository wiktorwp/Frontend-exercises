import { connect } from "react-redux";
import { Link } from "react-router-dom"

const Home = ({movies}, props) => {
    return (
        <div>
            <div>
            <h3>New movies</h3>
            {movies.slice(movies.length-3,movies.length).map(movie => (<div>{<Link to={`/movies/${movie.id}`}>
                        {movie.name}
                    </Link>}</div>))}
        </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, null)(Home);