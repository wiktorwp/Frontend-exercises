import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addNoteAction } from "../notes/NoteActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";

const NoteForm = ({history, addNoteAction},props) => {
    useEffect(() => {
        console.log(props.notes);
    }, [props])

    const handleSubmit = (values) => {
        addNoteAction(values);
        history.push(`/notes`);
    }

    return (
        <div>
            <h3>note</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    name: '',
                    date: '',
                    desc: '',
                    done: false,
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        note Name
                        <Field name="name" /><br/>
                        note Date
                        <Field name="date" /><br/>
                        note Description
                        <Field name="desc" /><br/>
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
        notes: state.notes
    }
};

const mapDispatchToProps = {
    addNoteAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteForm));