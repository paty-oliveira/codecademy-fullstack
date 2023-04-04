import { API_ENDPOINT } from "./index";

export const getRestaurants = async () => {
  const response = await fetch(`${API_ENDPOINT}/restaurants`);
  const restaurants = await response.json();

  return restaurants;
};

export const addNewRestaurant = async (newName) => {
  const response = await fetch(`${API_ENDPOINT}/restaurants`, {
    method: "POST",
    body: JSON.stringify({
      name: newName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newRestaurant = await response.json();

  return newRestaurant;
};

export const deleteRestaurant = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/restaurants/${id}`, {
    method: "DELETE",
  });

  return response.status;
};

export const updateRestaurantName = async (id, newName) => {
  const response = await fetch(`${API_ENDPOINT}/restaurants/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      newName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.status;
};

export const starRestaurant = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/restaurants/starred`, {
    method: "POST",
    body: JSON.stringify({
      id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newStarredRestaurant = await response.json();

  return { status: response.status, data: newStarredRestaurant };
};
