# Food Champ

A food delivery web app built with React. You can browse restaurants, search and filter them, open a restaurant's menu, and add dishes to a cart.

**Live demo:** https://amankumar7404.github.io/food-champ/

> This is a learning project. The restaurant and menu data is a saved sample copied from Swiggy's public website. It is not affiliated with Swiggy, and no real orders are placed.

## What the app does

- **Shows restaurants** as cards with an image, rating, cuisines, cost for two and delivery time.
- **Search** finds restaurants by name.
- **Top Rated Restaurants** button shows only restaurants rated above 4. The full list is kept safe, so search still works afterwards.
- **Loading placeholder** (shimmer) appears while data loads.
- **Promoted label** appears on top-rated cards.
- **Restaurant menu page** opens when you click a card. Each restaurant has its own menu.
- **Menu categories** open and close like an accordion. Only one is open at a time.
- **Cart** lets you add dishes, remove them or clear everything. The header shows how many items are in the cart, and the cart page shows the total price.
- **About and Contact pages**, plus an error page for wrong URLs.

## Built with

- **React** for building the user interface from components.
- **React Router** for moving between pages without reloading.
- **Redux Toolkit** for storing the cart in one place that every page can use.
- **Tailwind CSS** for styling.
- **Parcel** for running and bundling the project.

## How it works

**Components.** The screen is split into small pieces: `Header`, `Body`, `RestaurantCard`, `RestaurantMenu`, `RestaurantCategory`, `ItemList` and `Cart`. Parents pass data to children using props.

**Routing.** Each page has its own URL, such as `/about` and `/cart`. The menu page uses a dynamic URL, `/restaurants/:resId`, and reads the restaurant id with `useParams` to show the right menu. The app uses a hash router (`/#/about`) because GitHub Pages has no server to redirect URLs.

**Search and filter.** The app keeps two lists in state: the full list and the list that is shown. Search and the Top Rated button change only the shown list, so the full list is never lost.

**Accordion.** The menu page remembers which category is open, and each category is told whether it should be open. This is called lifting state up.

**Cart.** The cart lives in a Redux store, so the header, the menu items and the cart page can all use it:

1. Clicking **Add +** sends the dish to the store with `dispatch(addItem(item))`.
2. The `addItem` function in `cartSlice.js` adds it to the cart list.
3. Components that read the cart with `useSelector` update automatically. The header count goes up and the cart page shows the dish.

## About the data

Swiggy's API blocks requests from other websites, so this project uses a saved copy of the real data:

- `src/utils/swiggyData.json` holds the restaurant list.
- `src/utils/menus.json` holds one menu for each restaurant.

The components do not care where the data comes from. To use a live API later, only the code that loads the data needs to change.

## Run it on your computer

You need Node.js installed.

```bash
git clone https://github.com/Amankumar7404/food-champ.git
cd food-champ
npm install
npm start
```

Then open http://localhost:1234 in your browser.

To publish it to GitHub Pages:

```bash
npm run deploy
```

## Project structure

```
src/
  components/   all the screens and pieces (Header, Body, Cart and more)
  utils/        cart logic, store, constants and the saved data files
  App.js        page layout and routes
```

## Future improvements

- Keep the cart saved after a page refresh
- Show quantity in the cart instead of repeated rows
- Add login and checkout pages
- Use a real backend API for live data
