import React, {useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
const App = () => {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
    ? JSON.parse(savedContacts)
    :
    [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]
});

 const [filter, setFilter]= useState("");

 const visibleContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

const addContact = (newContact) =>{
  setContacts((prev)=> [newContact, ...prev]);
}

const deleteContact = (contactId) =>{
  setContacts((prev)=>{
    return prev.filter((contact)=> contact.id !== contactId);
  })
}

useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);

  return (
    <>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  )
}

export default App;