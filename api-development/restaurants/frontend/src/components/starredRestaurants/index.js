import React, { useContext, useEffect } from "react";
import StarredRestaurant from "./StarredRestaurant";
import {
  getStarredRestaurants,
  unstarRestaurant,
  updateComment,
} from "../../api/starredRestaurants";
import RestaurantsContext from "../../provider/restaurants";

const StarredRestaurants = () => {
  const {
    state: { starredRestaurants },
    dispatch,
  } = useContext(RestaurantsContext);

  useEffect(() => {
    async function fetchData() {
      const restaurantsData = await getStarredRestaurants();
      dispatch({
        type: "LOADED_STARRED_RESTAURANTS",
        payload: restaurantsData,
      });
    }
    fetchData();
  }, [dispatch]);

  const onUnstarRestaurant = async (id) => {
    const responseStatus = await unstarRestaurant(id);

    if (responseStatus !== 200) {
      alert("Updating failed");
      return;
    }

    dispatch({
      type: "UNSTAR_RESTAURANT",
      payload: id,
    });
  };

  const onUpdateComment = async (id, newComment) => {
    const responseStatus = await updateComment(id, newComment);

    if (responseStatus !== 200) {
      alert("Updating failed");
      return;
    }

    dispatch({
      type: "UPDATE_STARRED_RESTAURANT_COMMENT",
      payload: { id, newComment },
    });
  };

  return (
    <div className='column'>
      <h2>⭐ Starred Restaurants ⭐</h2>
      <ul>
        {starredRestaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <StarredRestaurant
              restaurant={restaurant}
              onUnstarRestaurant={() => {
                onUnstarRestaurant(restaurant.id);
              }}
              onUpdateComment={(newComment) => {
                onUpdateComment(restaurant.id, newComment);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarredRestaurants;
