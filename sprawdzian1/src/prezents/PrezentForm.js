import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addPrezentAction } from "../prezents/PrezentActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";

const PrezentForm = ({history, addPrezentAction},props) => {
    useEffect(() => {
        console.log(props.prezents);
    }, [props])

    const handleSubmit = (values) => {
        addPrezentAction(values);
        history.push(`/prezents`);
    }

    return (
        <div>
            <h3>prezent</h3>
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
    )
}

const mapStateToProps = (state) => {
    return {
        prezents: state.prezents
    }
};

const mapDispatchToProps = {
    addPrezentAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrezentForm));