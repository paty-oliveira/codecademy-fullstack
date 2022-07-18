import React from "react";

import { Tile } from '../tile/Tile';

export const TileList = (props) => {

  const contacts = props.contacts;

  return (
    <div>
      {contacts.map((contact, index) => {
        return <Tile contact={contact} key={index} />
      })}
    </div>
  );
};
