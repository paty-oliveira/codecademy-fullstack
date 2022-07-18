import React from "react";

import { ContactPicker } from '../../components/contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleDatechange = (event) => {
    setDate(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input type='text' value={title} onChange={handleTitleChange} />
      </label>
      <lable>
        Date
        <input type='date' min={getTodayString} value={date} onChange={handleDatechange} />
      </lable>
      <label>
        Time
        <input type='time' value={time} onChange={handleTimeChange} />
      </label>
      <label> Contact
        <ContactPicker contacts={contacts} setContact={setContact} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
