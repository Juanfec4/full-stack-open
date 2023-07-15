import { useState, useEffect } from "react";
import Title from "./components/Title";
import NewContactForm from "./components/NewContactForm";
import Contacts from "./components/Contacts";
import FilterForm from "./components/FilterForm";
import contactService from "./services/contacts";

const App = () => {
  const [contacts, setContacts] = useState("");
  const [filteredContacts, setFilteredContacts] = useState("");
  const [input, setInput] = useState({
    name: "",
    number: "",
  });
  const [filterInput, setFilterInput] = useState({
    filter: "",
  });

  useEffect(() => {
    contactService.getAll().then((response) => {
      setContacts(response.data);
    });
  }, []);

  useEffect(() => {
    if (!contacts) {
      return;
    }
    let newContactArray = contacts.filter((contact) => {
      return contact.name.toLowerCase().startsWith(filterInput.filter);
    });
    setFilteredContacts(newContactArray);
  }, [filterInput, contacts]);

  const handleFilterChange = (e) => {
    setFilterInput({
      ...filterInput,
      filter: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleNewContact = (e) => {
    e.preventDefault();
    let existingIndex = existingContactIndex(input.name);
    if (existingIndex !== undefined) {
      return handleExistingContact(existingIndex);
    }
    if (!input.number) {
      return alert(`Please enter a number for ${input.name}.`);
    }
    contactService.create(input).then((response) => {
      setContacts([...contacts, { ...input, id: contacts.length + 1 }]);
    });
    setInput({
      name: "",
      number: "",
    });
  };

  const handleDelete = (e) => {
    let { name: nameToDelete } = contacts.find((contact) => {
      return contact.id == e.target.id;
    });
    if (window.confirm(`Do you want to remove ${nameToDelete}`)) {
      let newContactArray = contacts.filter((contact) => {
        return contact.id != e.target.id;
      });
      contactService.remove(e.target.id).then((response) => {
        setContacts(newContactArray);
      });
    }
  };

  const handleExistingContact = (index) => {
    if (
      window.confirm(
        `Contact with name ${input.name} already exists, do you want to replace the old number with the new one?`
      )
    ) {
      let updatedContact = { ...contacts[index], ...input };
      let newContactArray = [...contacts];
      newContactArray.splice(index, 1, updatedContact);
      contactService
        .update(contacts[index].id, updatedContact)
        .then((response) => {
          setContacts(newContactArray);
        });
      setInput({
        name: "",
        number: "",
      });
    }
  };

  const existingContactIndex = (name) => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
        return i;
      }
    }
    return undefined;
  };

  return (
    <div>
      <Title text={"Phone-book"} />
      <Title text={"Filter"} />
      <FilterForm handleFilterChange={handleFilterChange} input={filterInput} />
      <Title text={"Add Contact"} />
      <NewContactForm
        handleNewContact={handleNewContact}
        handleInputChange={handleInputChange}
        input={input}
      />
      <Title text={"Contacts"} />
      <Contacts contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
