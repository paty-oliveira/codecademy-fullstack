function getStarredRestaurantInfo(allRestaurants, starredRestaurants) {
	return starredRestaurants.map(
		(starredRestaurant) => {
			const restaurant = allRestaurants.find(
				(restaurant) => restaurant.id === starredRestaurant.restaurantId
		);

		return {
			id: starredRestaurant.id,
			comment: starredRestaurant.comment,
			name: restaurant.name,
		};
		}
	);
}

exports.getStarredRestaurantInfo = getStarredRestaurantInfo;