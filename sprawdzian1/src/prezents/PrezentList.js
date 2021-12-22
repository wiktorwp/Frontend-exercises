import { connect } from "react-redux";
import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import PrezentForm from './PrezentForm'
import { addPrezentAction, deletePrezentAction, updatePrezentsAction, completePrezentAction } from "../prezents/PrezentActions";
const _ = require('lodash')
const PrezentList = ({ prezents, addprezentAction, updatePrezentsAction,completePrezentAction, deletePrezentAction }, props) => {

    return (
        <div>
            <h3>prezents list</h3>
            Dodaj nowy prezent
            <PrezentForm />
            <div className="ItemList">
            {prezents.map(prezent => {
                return (
                    <div className="Item" key={prezent.id}>
                        <Link to={`/prezents/${prezent.id}`}>{prezent.receiver}</Link>
                        <button onClick={() => deletePrezentAction(prezent)}>Usuń</button>
                    </div>)
            })}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        prezents: state.prezents,
    };
}

const mapDispatchToProps = {
    updatePrezentsAction,
    addPrezentAction,
    deletePrezentAction,
    completePrezentAction
}


export default connect(mapStateToProps, mapDispatchToProps)(PrezentList);