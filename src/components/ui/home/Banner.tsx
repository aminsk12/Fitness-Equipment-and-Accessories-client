import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: "url(/public/img/banner1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full space-y-10">
            <h1 className="mb-5 md:text-8xl text-4xl font-bold ">Welcome to Fitness Club</h1>
            <p className=" mm:text-2xl">
              Your one-stop shop for premium gym equipment and accessories.
              Elevate your fitness journey with our top-quality products.
            </p>
            <NavLink
              to={"/products"}
              className="inline-block px-8 py-3 bg-white hover:bg-gray-800 text-black text-lg  rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105  hover:text-white font-bold"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
