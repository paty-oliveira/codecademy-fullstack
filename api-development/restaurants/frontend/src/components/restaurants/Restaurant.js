import React, { useState, useEffect } from "react";

const Restaurant = ({
  restaurant,
  onDeleteRestaurant,
  onStarRestaurant,
  onUpdateRestaurant,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(restaurant.name);

  useEffect(() => {
    if (!isEditing) {
      setName(restaurant.name);
    }
  }, [isEditing, restaurant, restaurant.name]);

  const onSaveNameChange = async () => {
    onUpdateRestaurant(name);
    setIsEditing(false);
  };

  return (
    <div className='restaurant-list' >
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      ) : (
        name
      )}
      <div className='restaurant-buttons'>
          <button
            className='edit-btn'
            onClick={() => {
              setIsEditing((previousState) => !previousState);
            }}
          >
            {isEditing ? "Cancel Edit" : "Edit"}
          </button>

          {isEditing ? (
            <button className='save-btn' onClick={onSaveNameChange}>Save Name</button>
          ) : (
            <>
              <button className='delete-btn' onClick={onDeleteRestaurant}>Delete</button>
              <button className='star-btn' onClick={onStarRestaurant}>Star</button>
            </>
          )}
      </div>
    </div>
  );
};

export default Restaurant;
