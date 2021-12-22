import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { editDirectorAction } from "../actions/DirectorActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";

const DirectorEdit = ({history, editDirectorAction, director},props) => {
    useEffect(() => {
        console.log(props.directors);
        
    }, [props])

    const handleSubmit = (values) => {
        editDirectorAction(values);
        history.push(`/directors/${director.id}`)
    }

    return (
        <div>
            <h3>Director</h3>
            <Formik
                initialValues={{
                    id: director.id,
                    name: director.name,
                    lastname: director.lastname,
                    age: director.age
                }}//
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        Imie
                        <Field name="name" /><br/>
                        Nazwisko
                        <Field name="lastname" /><br/>
                        Wiek
                        <Field name="age" />
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
    editDirectorAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DirectorEdit));