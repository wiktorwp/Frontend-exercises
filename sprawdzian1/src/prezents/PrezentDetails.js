import { useEffect } from "react";
import { Field, Form, Formik } from "formik"
import {v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { editPrezentAction } from "./PrezentActions";

const PrezentDetails = ({ prezent, history, editPrezentAction }, props) => {

    const checkDone = () => {
        if (prezent.done == false){
            return "Do zrobienia"
        }
        else return "Skonczone"
    }

    const handleSubmit = (values) => {
        editPrezentAction(values);
        history.push(`/prezents/${prezent.id}`);
    }

    return (

        <div>
            <h3>prezent details</h3>
            <div>
                <div>{prezent.name}</div>
                <div>{prezent.date}</div>
                <div>{checkDone()}</div>

                <div>Edycja</div>
                <Formik
                initialValues={{
                    id: prezent.id,
                    name: '',
                    date: '',
                    done: false,
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        prezent Name
                        <Field name="name" /><br/>
                        prezent Date
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
    prezent: state.prezents.find(prezent => prezent.id == props.match.params.id)
});

const mapDispatchToProps = {
    editPrezentAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrezentDetails));