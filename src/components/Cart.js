import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + (item.card.info.price || item.card.info.defaultPrice || 0) / 100,
    0,
  );

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <div className="py-6">
            <h2 className="font-bold text-lg mb-4">Your cart is empty</h2>
            <Link to="/" className="underline">
              Browse restaurants
            </Link>
          </div>
        ) : (
          <>
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
              >
                <span>{item.card.info.name}</span>
                <span>
                  ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                  <button
                    className="ml-4 px-2 py-1 bg-gray-200 rounded-lg"
                    onClick={() => dispatch(removeItem(index))}
                  >
                    Remove
                  </button>
                </span>
              </div>
            ))}

            <h2 className="font-bold text-lg mt-4">Total: ₹{total}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
