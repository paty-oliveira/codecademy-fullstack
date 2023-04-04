import { useReducer } from "react";
import "./App.css";
import Restaurants from "./components/restaurants";
import StarredRestaurants from "./components/starredRestaurants";
import RestaurantsContext, {
  RestaurantsInitialState,
  RestaurantsReducer,
} from "./provider/restaurants";

function App() {
  const [state, dispatch] = useReducer(
    RestaurantsReducer,
    RestaurantsInitialState
  );

  return (
    <div className="App">
      <h1>My Restaurant List</h1>
      <RestaurantsContext.Provider value={{ state, dispatch }}>
        <Restaurants />
        <StarredRestaurants />
      </RestaurantsContext.Provider>
    </div>
  );
}

export default App;
