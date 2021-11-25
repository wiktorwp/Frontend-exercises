import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PostList from "../posts/PostList";
const DirectorDetails = ({director}, props) => {


    return (
        <div>
            <h3>Director details</h3>

            <div>
                <p>Imie: {director.name}</p>
                <p>Nazwisko: {director.lastname}</p>
                <p>Wiek: {director.age}</p>
            </div>
            <div>
                <div>
                    <Link to={`/directors/${director.id}/edit`}>Edit Director</Link>
                </div>

            </div>
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    director: state.directors.find(director => director.id === props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(DirectorDetails));