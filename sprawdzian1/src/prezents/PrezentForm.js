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
                    receiver: '',
                    company: '',
                    manu: '',
                    rgb: false,
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        Nazwa prezentu
                        <Field name="name" /><br/>
                        Kto otrzyma prezent
                        <Field name="receiver" /><br/>
                        Firma prezentu
                        <Field as="select" name="company">
                            <option value="msi">MSI</option>
                            <option value="gigabyte">Gigabyte</option>
                            <option value="asus">Asus</option>
                        </Field>
                        Producent prezentu<br/>
                        <div className="manu">
                        <label>
                        AMD
                        <Field type="radio" name="manu" value="AMD" />
                        </label>
                        <label>
                        Nvidia
                        <Field type="radio" name="manu" value="Nvidia" />
                        </label>
                        </div>
                        <div className="rgb">
                        <h1>Czy ma rgb?</h1>
                        <Field type="checkbox" name="rgb"/>
                        </div>
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