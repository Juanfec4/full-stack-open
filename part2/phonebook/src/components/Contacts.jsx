const Contacts = ({ contacts, handleDelete }) => {
  if (!contacts) {
    return;
  }
  return (
    <div>
      {contacts.map((contact) => {
        return (
          <p key={contact.id} id={contact.id}>
            {contact.name} {contact.number}{" "}
            <button id={contact.id} onClick={handleDelete}>
              DELETE
            </button>
          </p>
        );
      })}
    </div>
  );
};
export default Contacts;
