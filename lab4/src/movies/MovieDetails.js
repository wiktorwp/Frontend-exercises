import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import ActorAssign from "../actors/ActorAssign";
const MovieDetails = ({movie}, props) => {


    return (
        <div>
            <h3>Movie details</h3>

            <div>
                <p>Nazwa Filmu: {movie.name}</p>
                <p>Rok produkcji: {movie.year}</p>
            </div>
            <ActorAssign/>
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    movie: state.movies.find(movie => movie.id === props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(MovieDetails));