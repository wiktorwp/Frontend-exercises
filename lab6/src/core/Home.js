import { connect } from "react-redux";
import { Link } from "react-router-dom"

const Home = ({movies}, props) => {
    return (
        <div>
            <div>
            <h3>New movies</h3>
        </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, null)(Home);