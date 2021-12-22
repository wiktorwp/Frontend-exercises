import { useEffect } from "react";
import { Field, Form, Formik } from "formik"
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { editPrezentAction } from "./PrezentActions";

const PrezentDetails = ({ prezent, history, editPrezentAction }, props) => {

    const checkRgb = () => {
        if (prezent.rgb == true) {
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
            <h5>Konfiguracja przedmiotu w paczce</h5>
            <div>
                <div className="details"> 
                <div>Nazwa prezentu: {prezent.name}</div>
                <div>Otrzyma go: {prezent.receiver}</div>
                <div>Firma robiaca prezent: {prezent.company}</div>
                <div>Tworca czesci prezentu: {prezent.manu}</div>
                <div>Czy ma rgb? {checkRgb()}</div>
            </div>

                <h5>Edycja</h5>
                <Formik
                    initialValues={{
                        id: prezent.id,
                        name: prezent.name,
                        receiver: prezent.receiver,
                        company: prezent.company,
                        manu: prezent.manu,
                        rgb: prezent.rgb,
                    }}
                    onSubmit={(values) => handleSubmit(values)}
                    enableReinitialize={true}>
                    <Form>
                        Nazwa prezentu
                        <Field name="name" /><br />
                        Kto otrzyma prezent
                        <Field name="receiver" /><br />
                        Firma prezentu
                        <Field as="select" name="company">
                            <option value="msi">MSI</option>
                            <option value="gigabyte">Gigabyte</option>
                            <option value="asus">Asus</option>
                        </Field>
                        Producent prezentu<br />
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
                            <Field type="checkbox" name="rgb" />
                        </div>
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