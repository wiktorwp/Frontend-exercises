import { connect } from "react-redux";
import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import TodoForm from './TodoForm'
import { addTodoAction, deleteTodoAction, updateTodosAction, completeTodoAction } from "../todos/TodoActions";
import { todoDownloadedChangeAction } from "../actions/DownloadedActions";
const _ = require('lodash')
const TodoList = ({ todos, addtodoAction, updateTodosAction,completeTodoAction, deleteTodoAction, downloaded, todoDownloadedChangeAction }, props) => {

    return (
        <div>
            <h3>todos list</h3>
            <TodoForm />
            <div className="Filtering">
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <Link to={`/todos/${todo.id}`}>{todo.name}</Link>
                        <button onClick={() => deleteTodoAction(todo)}>Usuń</button>
                        <button onClick={() => {todo.done=true; completeTodoAction(todo)}}> Zrobione</button>
                    </div>)
            })}

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        downloaded: state.downloaded
    };
}

const mapDispatchToProps = {
    updateTodosAction,
    addTodoAction,
    deleteTodoAction,
    completeTodoAction,
    todoDownloadedChangeAction
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);