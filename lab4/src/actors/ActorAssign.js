import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { addActorToMovieAction } from "../actions/MovieActions";

const ActorAssign = ({actors, movie}, props) => {

    return (
        <div>
            <h3>Actor list</h3>
            {actors.map(actor => (<div key={"actor "+actor.id}><Link to={`/actors/${actor.id}`}>
                        {actor.name}
                    </Link>
                    <button onClick={() => assignActor(actor, movie)}>Przypisz</button></div>))}
        </div>
    )
};

const assignActor = (actor, movie) => {
    let values = {
        id: movie.id,
        name: movie.name,
        year: movie.year,
        actors: actor.name
    }
    addActorToMovieAction(values)
}

const mapStateToProps = (state, props) => ({
    actors: state.actors,
    movie: state.movies.find(movie => movie.id === props.match.params.id)
});

export default connect(mapStateToProps, null)(ActorAssign);