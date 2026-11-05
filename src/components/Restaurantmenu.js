import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import RestaurantCategory from "./RestaurantCategory";
import menus from "../utils/menus.json";

const RestaurantMenu = () => {
  // 1. State and params (top of the component)
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const [showIndex, setshowIndex] = useState(null);

  // 2. Load the data

  useEffect(() => {
    setResInfo(menus[resId] || menuData.data);
  }, [resId]);

  // 3. THE PART YOU ASKED ABOUT: starts here
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info || {};

  const regularCards =
    resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const categories = regularCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );
  // ...and ends here

  // 4. The JSX (what shows on screen)
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* Accordion */}
      const [showIndex, setShowIndex] = useState(null); // ...inside the JSX:
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex}
          setshowIndex={() => setshowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
