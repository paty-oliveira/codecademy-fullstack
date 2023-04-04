import React from "react";

export const RestaurantsInitialState = {
  restaurants: [],
  starredRestaurants: [],
};

export const RestaurantsReducer = (state = RestaurantsInitialState, action) => {
  switch (action.type) {
    case "LOADED_RESTAURANTS": {
      return { ...state, restaurants: action.payload };
    }
    case "LOADED_STARRED_RESTAURANTS": {
      return { ...state, starredRestaurants: action.payload };
    }
    case "ADD_NEW_RESTAURANT": {
      return { ...state, restaurants: [...state.restaurants, action.payload] };
    }
    case "DELETE_RESTAURANT": {
      return {
        ...state,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.id !== action.payload
        ),
      };
    }
    case "UPDATE_RESTAURANT_NAME": {
      const nextRestaurantsState = [...state.restaurants];
      const restaurantToUpdate = nextRestaurantsState.find(
        (restaurant) => restaurant.id === action.payload.id
      );

      restaurantToUpdate.name = action.payload.newName;
      return {
        ...state,
        restaurants: nextRestaurantsState,
      };
    }
    case "STAR_RESTAURANT": {
      return {
        ...state,
        starredRestaurants: [...state.starredRestaurants, action.payload],
      };
    }
    case "UNSTAR_RESTAURANT": {
      return {
        ...state,
        starredRestaurants: state.starredRestaurants.filter(
          (restaurant) => restaurant.id !== action.payload
        ),
      };
    }
    case "UPDATE_STARRED_RESTAURANT_COMMENT": {
      const nextStarredRestaurantsState = [...state.starredRestaurants];
      const restaurantToUpdate = nextStarredRestaurantsState.find(
        (restaurant) => restaurant.id === action.payload.id
      );

      restaurantToUpdate.comment = action.payload.newComment;

      return { ...state, starredRestaurants: nextStarredRestaurantsState };
    }
    default:
      return state;
  }
};

const RestaurantsContext = React.createContext({
  state: RestaurantsInitialState,
  dispatch: (action) => {},
});

export default RestaurantsContext;
