import { useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import swiggyData from "../utils/swiggyData.json";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const cards = swiggyData?.data?.cards || [];

const restaurants =
  cards.find((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  const [filteredRestaurant, setfilteredRestaurant] = useState(restaurants);
  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg font-bold text-xl"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setfilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center text-xl">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg font-bold"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4,
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
