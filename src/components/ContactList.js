import Contact from "./Contact";


function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          onDelete={() => deleteContact(contact.id)}
        />
      ))}
    </div>
  );
}

export default ContactList;
