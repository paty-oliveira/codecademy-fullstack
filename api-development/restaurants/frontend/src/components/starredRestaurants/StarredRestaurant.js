import React, { useState } from "react";

const StarredRestaurant = ({ 
  restaurant,
  onUnstarRestaurant,
  onUpdateComment
 }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [comment, setComment] = useState(restaurant.comment);

  const onSaveComment = async () => {
    onUpdateComment(comment);
    setIsEditing(false);
  };

  return (
    <div className='starred-restaurant' >
      <h3>{restaurant.name}</h3>
      {isEditing ? (
          <input
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        ) : (
          <p>{comment}</p>
        )}
      <button className='edit-btn'
        onClick={() => {
          setIsEditing((previousState) => !previousState)
        }}
      >
        {isEditing ? "Cancel Edit" : "Edit Comment"}
      </button>

      {isEditing ? (
        <button className='save-btn' onClick={onSaveComment}>Save Comment</button>
      ) : (
        <button className='unstar-btn' onClick={onUnstarRestaurant}>Unstar</button>
      )}
    </div>
  );
};

export default StarredRestaurant;
