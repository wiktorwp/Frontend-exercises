import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { editActorAction } from "../actions/ActorActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";

const ActorEdit = ({history, editActorAction, actor},props) => {
    useEffect(() => {
        console.log(props.actors);
        
    }, [props])

    const handleSubmit = (values) => {
        editActorAction(values);
        history.push(`/actors/${actor.id}`)
    }

    return (
        <div>
            <h3>Actor</h3>
            <Formik
                initialValues={{
                    id: actor.id,
                    name: actor.name,
                    lastname: actor.lastname,
                    age: actor.age
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
        actor: state.actors.find(actor => actor.id === props.match.params.id)
    }
};

const mapDispatchToProps = {
    editActorAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActorEdit));