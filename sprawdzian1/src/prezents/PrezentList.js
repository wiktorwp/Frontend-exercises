import { connect } from "react-redux";
import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import PrezentForm from './PrezentForm'
import { addPrezentAction, deletePrezentAction, updatePrezentsAction, completePrezentAction } from "../prezents/PrezentActions";
const _ = require('lodash')
const PrezentList = ({ prezents, addprezentAction, updatePrezentsAction, completePrezentAction, deletePrezentAction }, props) => {

    const noPresents = () => {
        if (prezents.length == 0) {
            return <div>Mikołaj nie ma jeszcze żadnych paczek. Pomóż mu i stwórz kilka.</div>
        }
    }

    return (
        <div>
            <h5>Dodaj nowy prezent</h5>
            <PrezentForm />
            <div className="ItemList">
                <h5>Wszystkie paczki Świętego Mikołaja</h5>
                {noPresents()}
                {prezents.map(prezent => {
                    return (
                        <div className="Item" key={prezent.id}>
                            <Link to={`/prezents/${prezent.id}`}>Prezent dla: {prezent.receiver}</Link>
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