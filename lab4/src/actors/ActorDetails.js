import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PostList from "../posts/PostList";
const ActorDetails = ({actor}, props) => {


    return (
        <div>
            <h3>Actor details</h3>

            <div>
                <p>Imie: {actor.name}</p>
                <p>Nazwisko: {actor.lastname}</p>
                <p>Wiek: {actor.age}</p>
            </div>
            <div>
                <div>
                    <Link to={`/actors/${actor.id}/edit`}>Edit Actor</Link>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state, props) => ({
        actor: state.actors.find(actor => actor.id === props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(ActorDetails));