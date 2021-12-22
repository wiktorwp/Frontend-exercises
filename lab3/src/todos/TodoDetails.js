import { useEffect } from "react";
import { Field, Form, Formik } from "formik"
import {v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { editTodoAction } from "./TodoActions";

const TodoDetails = ({ todo, history, editTodoAction }, props) => {

    const checkDone = () => {
        if (todo.done == false){
            return "Do zrobienia"
        }
        else return "Skonczone"
    }

    const handleSubmit = (values) => {
        editTodoAction(values);
        history.push(`/todos/${todo.id}`);
    }

    return (

        <div>
            <h3>todo details</h3>
            <div>
                <div>{todo.name}</div>
                <div>{todo.date}</div>
                <div>{checkDone()}</div>

                <div>Edycja</div>
                <Formik
                initialValues={{
                    id: todo.id,
                    name: '',
                    date: '',
                    done: false,
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        todo Name
                        <Field name="name" /><br/>
                        todo Date
                        <Field name="date" /><br/>
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    todo: state.todos.find(todo => todo.id == props.match.params.id)
});

const mapDispatchToProps = {
    editTodoAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoDetails));