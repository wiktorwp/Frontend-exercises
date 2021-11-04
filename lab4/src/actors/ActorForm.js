import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addActorAction } from "../actions/ActorActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";

const ActorForm = ({history, addActorAction},props) => {
    useEffect(() => {
        console.log(props.actors);
    }, [props])

    const handleSubmit = (values) => {
        addActorAction(values);
        history.push(`/actors`);
    }

    return (
        <div>
            <h3>Actor</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    name: '',
                    lastname: '',
                    age: ''
                }}
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

const mapStateToProps = (state) => {
    return {
        actors: state.actors
    }
};

const mapDispatchToProps = {
    addActorAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActorForm));