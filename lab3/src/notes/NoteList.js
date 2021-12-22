import { connect } from "react-redux";
import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import NoteForm from './NoteForm'
import { addNoteAction, deleteNoteAction, updateNotesAction, completeNoteAction } from "../notes/NoteActions";
const _ = require('lodash')
const NoteList = ({ notes, addnoteAction, updateNotesAction,completeNoteAction, deleteNoteAction }, props) => {

    return (
        <div>
            <h3>notes list</h3>
            <NoteForm />
            <div className='ItemList'>
            {notes.map(note => {
                return (
                    <div className="Item" key={note.id}>
                        <Link to={`/notes/${note.id}`}>{note.name}</Link>
                        <button onClick={() => deleteNoteAction(note)}>Usuń</button>
                        <button onClick={() => {note.done=true; completeNoteAction(note)}}> Zrobione</button>
                    </div>)
            })}
            </div>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
    };
}

const mapDispatchToProps = {
    updateNotesAction,
    addNoteAction,
    deleteNoteAction,
    completeNoteAction
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteList);