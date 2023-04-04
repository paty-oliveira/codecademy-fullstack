import {API_ENDPOINT} from "./index";

const BASE_API_ROUTE = `${API_ENDPOINT}/restaurants`;

export const getRestaurants = async () => {
  const response = await fetch(`${BASE_API_ROUTE}`);

  return await response.json();
};

export const addNewRestaurant = async (newName) => {
  const response = await fetch(`${BASE_API_ROUTE}`, {
    method: "POST",
    body: JSON.stringify({
      name: newName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const deleteRestaurant = async (id) => {
  const response = await fetch(`${BASE_API_ROUTE}/${id}`, {
    method: "DELETE",
  });

  return response.status;
};

export const updateRestaurantName = async (id, newName) => {
  const response = await fetch(`${BASE_API_ROUTE}/${id}`, {
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
  const response = await fetch(`${BASE_API_ROUTE}/starred`, {
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
