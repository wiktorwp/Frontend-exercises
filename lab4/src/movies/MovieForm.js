import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addDirectorAction } from "../actions/DirectorActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { addMovieAction } from "../actions/MovieActions";

const MovieForm = ({ movies, directors, addMovieAction },props) => {
    useEffect(() => {
        console.log('Movies', movies);
        console.log('Directors', directors);
    }, [movies, directors])

    const handleSubmit = (values) => {
        addMovieAction(values);
    }

    return (
        <div>
            <h3>Movie</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    name: '',
                    year: ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="name" />
                        <Field name="year" />
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        directors: state.directors
    }
};

const mapDispatchToProps = {
    addMovieAction
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);