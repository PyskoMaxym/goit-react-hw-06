import React from "react";
import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { RiAccountBoxFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


const Contact = ( {id, name, number}) =>{
    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(deleteContact(id));
    }

    return(
        <li className={styles.listitem}>
            <div>
            <p>{name}</p>           
            <p>{number}</p>
            </div>
            <button type="button" onClick={handleDelete}>Delete</button>
        </li>

    )
}

export default Contact;