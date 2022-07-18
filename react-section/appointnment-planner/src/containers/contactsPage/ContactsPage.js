import React, { useState, useEffect } from "react";

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicates, setDuplicates] = useState(false);

  const contacts = props.contacts;
  const addNewContact = props.addContact;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!duplicates) {
      addNewContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    const uniqueContactNames = new Set(contacts.map(contact => contact.name));
    let nameExists = false;

    if (uniqueContactNames.size < contacts.length){
      nameExists = true;
    }

    setDuplicates(nameExists);
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          tile={contacts}
        />
      </section>
    </div>
  );
};
