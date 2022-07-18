import React from "react";

import { Tile } from '../tile/Tile';

export const TileList = (props) => {

  const contacts = props.tile;

  return (
    <div>
      {contacts.map((contact, index) => {
        return <Tile tile={contact} key={index} />
      })}
    </div>
  );
};
