import { useEffect } from "react";
import { Field, Form, Formik } from "formik"
import {v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { editNoteAction } from "./NoteActions";

const NoteDetails = ({ note, history, editNoteAction }, props) => {

    const checkDone = () => {
        if (note.done == false){
            return "Do zrobienia"
        }
        else return "Skonczone"
    }

    const handleSubmit = (values) => {
        editNoteAction(values);
        history.push(`/notes/${note.id}`);
    }

    return (

        <div>
            <h3>note details</h3>
            <div>
                <div>{note.name}</div>
                <div>{note.date}</div>
                <div>{checkDone()}</div>
                <div>{note.desc}</div>

                <div>Edycja
                <Formik
                initialValues={{
                    id: note.id,
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
            </div>
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    note: state.notes.find(note => note.id == props.match.params.id)
});

const mapDispatchToProps = {
    editNoteAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDetails));