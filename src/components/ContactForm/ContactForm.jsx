import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import styles from "./ContactForm.module.css"

const ContactForm = ({ onAdd}) =>{

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(3).max(50),
        number: Yup.string().required().min(3).max(50),
    });

    const handleSubmit = (values, actions) =>{
        actions.resetForm();
        onAdd({
                id: nanoid(),
                ...values,
        });
    };

    return(
        <Formik
        initialValues={{name:"", number:""}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
            
            {()=>
            <Form className={styles.form}>

            <label className={styles.label}>
            <span>Name</span>
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage name="name"  component="div" />
            </label>
            
            <label className={styles.label}>
            <span>Number</span>
            <Field type="text" name="number" />
            <ErrorMessage name="number"  component="div" />
            </label>
            <button type="submit" >Add contact</button>

            </Form>
            }
        </Formik>
    )
}

export default ContactForm;