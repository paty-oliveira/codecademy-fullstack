import { API_ENDPOINT } from "./index";

const BASE_API_ROUTE = `${API_ENDPOINT}/restaurants/starred`;

export const getStarredRestaurants = async () => {
  const response = await fetch(`${BASE_API_ROUTE}`);
  const json = await response.json();

  return json;
};

export const unstarRestaurant = async (id) => {
  const response =  await fetch(`${BASE_API_ROUTE}/${id}`, {
    method: "DELETE"
  });

  return response.status;
};

export const updateComment = async (id, newComment) => {
  const response = await fetch(`${BASE_API_ROUTE}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      newComment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.status;
};