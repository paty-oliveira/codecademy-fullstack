import React, { useState, useEffect, useContext } from "react";
import {
  addNewRestaurant,
  deleteRestaurant,
  getRestaurants,
  updateRestaurantName,
  starRestaurant,
} from "../../api/restaurants";
import RestaurantsContext from "../../provider/restaurants";
import Restaurant from "./Restaurant";

const Restaurants = () => {
  const {
    state: { restaurants },
    dispatch,
  } = useContext(RestaurantsContext);
  const [newRestaurantName, setNewRestaurantName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const restaurantsData = await getRestaurants();

      dispatch({ type: "LOADED_RESTAURANTS", payload: restaurantsData });
    }
    fetchData();
  }, [dispatch]);

  const onAddNewRestaurant = async (e) => {
    e.preventDefault();

    const newRestaurant = await addNewRestaurant(newRestaurantName);
    setNewRestaurantName("");
    dispatch({ type: "ADD_NEW_RESTAURANT", payload: newRestaurant });
  };

  const onDeleteRestaurant = async (id) => {
    const responseStatus = await deleteRestaurant(id);

    if (responseStatus !== 200) {
      alert("Deleting failed");
      return;
    }
    dispatch({ type: "DELETE_RESTAURANT", payload: id });
  };

  const onStarRestaurant = async (id) => {
    const { data, status } = await starRestaurant(id);

    if (status !== 200) {
      alert("Updating failed");
      return;
    }

    dispatch({ type: "STAR_RESTAURANT", payload: data });
  };

  const onUpdateRestaurant = async (id, newName) => {
    const responseStatus = await updateRestaurantName(id, newName);

    if (responseStatus !== 200) {
      alert("Updating failed");
      return;
    }
    dispatch({ type: "UPDATE_RESTAURANT_NAME", payload: { id, newName } });
  };

  return (
    <div className='column'>
      <div id='restaurants'>
        <h2>Restaurants</h2>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Restaurant
                restaurant={restaurant}
                onDeleteRestaurant={() => {
                  onDeleteRestaurant(restaurant.id);
                }}
                onStarRestaurant={() => {
                  onStarRestaurant(restaurant.id);
                }}
                onUpdateRestaurant={(newName) => {
                  onUpdateRestaurant(restaurant.id, newName);
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <div id='add-new'>
        <h3>Add a New Restaurant!</h3>
        <form onSubmit={onAddNewRestaurant}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={newRestaurantName}
            onChange={(e) => {
              setNewRestaurantName(e.target.value);
            }}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Restaurants;
