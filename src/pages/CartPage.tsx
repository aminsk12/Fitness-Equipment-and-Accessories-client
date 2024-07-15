import { Helmet } from "react-helmet";
import CartCard from "../components/ui/cart/CartCard";
import {
  removeFromCart,
  updateCartQuantity,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import banner from "../assets/img/b4.webp"

const CartPage = () => {
  //grab cart data from local state
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  // calculate total price
  const totalPrice = () => {
    return cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };
  // handle remove from cart
  const handleRemoveFromCart = (id: string) => {
    if (
      window.confirm("Are you sure you want to remove this item from the cart?")
    ) {
      dispatch(removeFromCart(id));
    }
  };
  //handle update quantity
  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };
  return (
    <div className="">
       <Helmet>
        <title>Fitness Club | Cart</title>
      </Helmet>
      <div
        className="hero min-h-96"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full space-y-10">
            <h1 className="mb-5 md:text-8xl text-4xl font-bold ">Welcome to Fitness Club Product Cart</h1>
            <p className=" mm:text-2xl">
              Your one-stop shop for premium gym equipment and accessories.
              Elevate your fitness journey with our top-quality products.
            </p>
            
          </div>
        </div>
      </div>
      <div className="lg:w-9/12 mx-auto">
        <CartCard
          cart={cart}
          handleUpdateQuantity={handleUpdateQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
          totalPrice={totalPrice}
        ></CartCard>
      </div>
    </div>
  );
};

export default CartPage;
