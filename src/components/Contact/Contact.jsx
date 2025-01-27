import React from "react";
import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { RiAccountBoxFill } from "react-icons/ri";


const Contact = ( {id, name, number, onDelete}) =>{

    return(
        <li className={styles.listitem}>
            <div>
            <p>{name}</p>           
            <p>{number}</p>
            </div>
            <button type="button" onClick={()=> onDelete(id)}>Delete</button>
        </li>

    )
}

export default Contact;