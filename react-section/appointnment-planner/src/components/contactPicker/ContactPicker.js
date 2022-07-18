import React from "react";

export const ContactPicker = (props) => {

  const contacts = props.contacts;
  const setContact = props.setContact;

  const handleContactChange = (event) => {
    setContact(event.target.value);
  }

  return (
    <select onChange={handleContactChange} >
      <option key="" value="" selected="selected"> </option>
      {contacts.map((contact, index) => {
        console.log(contact)
        return <option key={index} value={contact.phoneNumber}>{contact.phoneNumber}</option>
      })}
    </select>
  );
};
