import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>About Cooking Champ : </h1>
//         <h2>This is React</h2>
//         <UserClass />
//       </div>
//     );
//   }
// }

// export default About;

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">About Food Champ</h1>
      <p className="text-lg text-gray-600 mb-10">
        Great food, delivered fast. Discover restaurants near you and order your
        favourites in a few clicks.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="bg-gray-50 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To make good food easy to find, with honest menus, clear prices and
            quick delivery.
          </p>
        </div>
        <div className="bg-gray-50 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">What We Offer</h2>
          <p className="text-gray-600">
            Top restaurants, a wide range of cuisines, and menus organised by
            category so you can find a dish quickly.
          </p>
        </div>
        <div className="bg-gray-50 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Our Promise</h2>
          <p className="text-gray-600">
            Fresh meals, fair prices and a smooth ordering experience every time
            you open the app.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-2">Our Story</h2>
        <p className="text-gray-600">
          Cooking Champ started as a simple idea: everyone deserves a great meal
          without the hassle. We bring local favourites and popular chains
          together in one place, so you spend less time searching and more time
          enjoying your food.
        </p>
      </div>

      <p className="text-lg font-bold">
        Hungry? Pick a restaurant and let the champs do the cooking!
      </p>
    </div>
  );
};

export default About;
