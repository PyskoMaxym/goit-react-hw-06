import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(50),
    number: Yup.string().required().min(3).max(50),
});
const ContactForm = () =>{
    const contacts = useSelector((state)=> state.contacts.items);
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) =>{
        const {name, number} = values;
        if (contacts.some((contact) => contact.name === name)) {
            alert(`${name} вже є у списку контактів.`);
            return;
          }
    dispatch(addContact({ id: nanoid(), name, number}));
    resetForm();
    }
    
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