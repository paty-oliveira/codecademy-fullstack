import React from "react";

export const Tile = (props) => {

  const contactAttr = Object.values(props.contact);

  return (
    <div className="tile-container">
      {contactAttr.map((attr, index) => {
        return index === 0 ?
          <p className="tile-title" key={index}>{attr}</p> :
          <p className="tile" key={index}>{attr}</p>
      })}
    </div>
  );
};
