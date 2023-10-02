import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: new Date().getTime(),
      name: name,
      email: email,
      phone: phone,
    };

    const storeContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    storeContacts.push(newContact);
    localStorage.setItem("contacts", JSON.stringify(storeContacts));
    alert("Contacto Guardado Exitosamente.");

    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Telefono
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
}

export default ContactForm;
