import { Field, Form, Formik } from "formik"
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { addPostAction } from "../actions/PostActions";
import { withRouter } from "react-router";

const PostForm = ({ addPostAction, director, history },props) => {
    const handleSubmit = (values) => {
        addPostAction(values);
        history.push(`/directors/${director.id}`)
    }

    return (
        <div>
            <h3>New post</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    content: '',
                    directorId: director.id
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="content" />
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        director: state.directors.find(director => director.id === props.match.params.id)
    }
};

const mapDispatchToProps = {
    addPostAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));