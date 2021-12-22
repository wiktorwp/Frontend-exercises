import { connect } from "react-redux";
import { withRouter } from "react-router";

const PostList = ({posts}, props) => {
    
    return (
        <div>
            <h3>Post list</h3>
            {posts.map(post => (<div>{post.content}</div>))}
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        posts: state.posts.filter(el => el.directorId === props.match.params.id)
    }
}

export default withRouter(connect(mapStateToProps, null)(PostList));


/*


DISPATCH -> middleware -> REDUCER -> STORE -> Middleware -> REFRESH



*/