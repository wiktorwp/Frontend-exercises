import { useEffect } from "react";
import { Field, Form, Formik } from "formik"
import {v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { editPrezentAction } from "./PrezentActions";

const PrezentDetails = ({ prezent, history, editPrezentAction }, props) => {

    const checkRgb = () => {
        if (prezent.rgb == true){
            return "Prezent bedzie sie swiecil jak tecza"
        }
        else return "Prezent bedzie elegancki bez swiatelek"
    }

    const handleSubmit = (values) => {
        editPrezentAction(values);
        history.push(`/prezents/${prezent.id}`);
    }

    return (

        <div>
            <h3>prezent details</h3>
            <div>
                <div>Nazwa prezentu: {prezent.name}</div>
                <div>Otrzyma go: {prezent.receiver}</div>
                <div>Firma robiaca prezent: {prezent.company}</div>
                <div>Tworca czesci prezentu: {prezent.manu}</div>
                <div>Czy ma rgb? {checkRgb()}</div>

                <div>Edycja</div>
                <Formik
                initialValues={{
                    id: prezent.id,
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
                        AMD
                        <Field type="radio" name="manu" value="AMD" />
                        Nvidia
                        <Field type="radio" name="manu" value="Nvidia" />
                        Czy ma rgb?
                        <Field type="checkbox" name="rgb"/>
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