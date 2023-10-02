

function Contact({ name, email, phone, onDelete }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{email}</p>
        <p className="card-text">{phone}</p>
        <button className="btn btn-danger" onClick={onDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Contact;
