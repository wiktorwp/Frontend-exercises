import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { addUserAction } from "../actions/UserActions";
const UserList = ({ users, addUserAction } ,props) => {
    
    useEffect(() => {
        console.log("us"+users)
    if (users == ""){
    fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>(json.map(result => {addUserAction(result)})))
    }
        }, [props])
    

    return (
        <div>
            <h3>Users list</h3>
            {users.map(user => {
                return (
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.username}</Link>
                </div>)})}
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatchToProps = {
    addUserAction
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);