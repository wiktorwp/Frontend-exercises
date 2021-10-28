import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addDirectorAction } from "../actions/DirectorActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";

const DirectorForm = ({history, addDirectorAction},props) => {
    useEffect(() => {
        console.log(props.directors);
    }, [props])

    const handleSubmit = (values) => {
        addDirectorAction(values);
        history.push(`/directors`);
    }

    return (
        <div>
            <h3>Director</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    name: '',
                    email: ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="name" />
                        <Field name="email" />
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
        directors: state.directors
    }
};

const mapDispatchToProps = {
    addDirectorAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DirectorForm));