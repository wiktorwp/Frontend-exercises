import { connect } from "react-redux";
import { Link } from "react-router-dom"

const ActorList = ({actors}, props) => {

    return (
        <div>
            <h3>Actor list</h3>
            {actors.map(actor => (<div>{<Link to={`/actors/${actor.id}`}>
                        {actor.name}
                    </Link>}</div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        actors: state.actors
    }
}

export default connect(mapStateToProps, null)(ActorList);