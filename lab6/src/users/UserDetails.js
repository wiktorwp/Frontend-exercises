import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PostList from "../posts/PostList";
const UserDetails = ({user},props) => {

    return (

        <div>
            <h3>User details</h3>
            <div>
                <div>{user.username}</div>
                <div>{user.email}</div>
                <div>{user.name.firstname + " " + user.name.lastname}</div>

            </div>
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    user: state.users.find(user => user.id == props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(UserDetails));