import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addTodoAction } from "../todos/TodoActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";

const TodoForm = ({history, addTodoAction},props) => {
    useEffect(() => {
        console.log(props.todos);
    }, [props])

    const handleSubmit = (values) => {
        addTodoAction(values);
        history.push(`/todos`);
    }

    return (
        <div>
            <h3>todo</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
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
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = {
    addTodoAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoForm));