import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  return (
    <>
      <div className="container mt-5 mb-3">
        <h1 className="text-center">Agenda de Contactos</h1>
        <ContactForm />
        <div className="mt-5">
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        </div>
      </div>
    </>
  );
}

export default App;
