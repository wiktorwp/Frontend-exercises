import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PostList from "../posts/PostList";
const DirectorDetails = ({director}, props) => {


    return (
        <div>
            <h3>Director details</h3>

            <div>
                <p>Name: {director.name}</p>
                <p>Email: {director.email}</p>
            </div>
            <div>
                <div>
                    <Link to={`/directorss/${director.id}/posts/add`}>Create post</Link>
                </div>
                <PostList />
            </div>
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    director: state.directors.find(director => director.id === props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(DirectorDetails));