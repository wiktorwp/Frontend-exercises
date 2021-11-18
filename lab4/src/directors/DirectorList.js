import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { deleteDirectorAction } from "../actions/DirectorActions";
const DirectorList = ({ directors, deleteDirectorAction } ,props) => {


    return (
        <div>
            <h3>Directors list</h3>
            {directors.map(director => {
                return (
                <div key={"director "+director.id}>
                    <Link to={`/directors/${director.id}`}>
                        {director.name}
                    </Link>
                    <button onClick={() => deleteDirectorAction(director)}>Usuń</button>
                </div>)})}
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        directors: state.directors
    };
}

const mapDispatchToProps = {
    deleteDirectorAction
}


export default connect(mapStateToProps, mapDispatchToProps)(DirectorList);