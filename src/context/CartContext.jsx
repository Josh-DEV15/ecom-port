import {
  createContext,
  useEffect,
  useState
} from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  /* ---------------- CART STATE ---------------- */

  const [cart, setCart] = useState(() => {
    const savedCart =
      localStorage.getItem("vaultix-cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  /* ---------------- WISHLIST STATE ---------------- */

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist =
      localStorage.getItem("vaultix-wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  /* ---------------- SAVE TO LOCAL STORAGE ---------------- */

  useEffect(() => {
    localStorage.setItem(
      "vaultix-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(
      "vaultix-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  /* ---------------- ADD TO CART ---------------- */

  const addToCart = (product) => {

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  };

  /* ---------------- REMOVE FROM CART ---------------- */

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  /* ---------------- INCREASE QUANTITY ---------------- */

  const increaseQuantity = (id) => {

    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    );

    setCart(updatedCart);
  };

  /* ---------------- DECREASE QUANTITY ---------------- */

  const decreaseQuantity = (id) => {

    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  /* ---------------- ADD TO WISHLIST ---------------- */

  const addToWishlist = (product) => {

    const alreadyExists = wishlist.find(
      (item) => item.id === product.id
    );

    if (!alreadyExists) {
      setWishlist([...wishlist, product]);
    }
  };

  /* ---------------- REMOVE FROM WISHLIST ---------------- */

  const removeFromWishlist = (id) => {

    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updatedWishlist);
  };

  /* ---------------- MOVE TO CART ---------------- */

  const moveToCart = (product) => {

    addToCart(product);

    removeFromWishlist(product.id);
  };

  /* ---------------- CLEAR CART ---------------- */

  const clearCart = () => {
    setCart([]);
  };

  /* ---------------- TOTALS ---------------- */

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  /* ---------------- PROVIDER ---------------- */

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,

        addToCart,
        removeFromCart,

        increaseQuantity,
        decreaseQuantity,

        addToWishlist,
        removeFromWishlist,

        moveToCart,

        clearCart,

        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}