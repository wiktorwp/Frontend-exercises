import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { addActorToMovieAction } from "../actions/MovieActions";
import ActorAssign from "../actors/ActorAssign";
const MovieDetails = ({movie, actors, addActorToMovieAction}, props) => {

    const assignActor = (actor, movie) => {
        if ((movie.actorsActing.filter((actorActing)=> actor.name==actorActing)).length==0){
        let values = {
            id: movie.id,
            name: movie.name,
            year: movie.year,
            actorsActing: [...movie.actorsActing, actor.name]
        }
        addActorToMovieAction(values)
    }
    }

    return (
        <div>
            <h3>Movie details</h3>

            <div>
                <p>Nazwa Filmu: {movie.name}</p>
                <p>Rok produkcji: {movie.year}</p>
                <p>Aktorzy: {movie.actorsActing.map(actor => (actor + ", "))}</p>
            </div>
            <div>
            <h3>Actor list</h3>
            {actors.map(actor => (<div key={"actor "+actor.id}><Link to={`/actors/${actor.id}`}>
                        {actor.name}
                    </Link>
                    <button onClick={() => assignActor(actor, movie)}>Przypisz</button></div>))}
        </div>
        </div>
    )
};


const mapStateToProps = (state, props) => {
    return {
    actors: state.actors,
    movie: state.movies.find(movie => movie.id === props.match.params.id)
    }
};

const mapDispatchToProps = {
    addActorToMovieAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));