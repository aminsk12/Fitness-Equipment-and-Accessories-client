import { useNavigate } from "react-router-dom";
// import Hero from "../components/ui/about/Hero";
import ErrorPage from "../components/ui/global/ErrorPage";
import ProgressBar from "../components/ui/global/ProgressBar";
import Category from "../components/ui/Products/Catergory";
import ClearFilterButton from "../components/ui/Products/ClearFilterButton";
import SearchBar from "../components/ui/Products/SearchBar";
import Sorting from "../components/ui/Products/Sorting";
// import { useGetProductsQuery } from "../redux/api/baseApi";
import { clearCategory } from "../redux/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { TProduct } from "../types";
import { useGetProductsQuery } from "../redux/features/product/productApi";
import { Helmet } from "react-helmet";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //view details  button functionality
  const handleViewDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };
  // grab category name from local state
  const selectedCategory = useAppSelector(
    (state: RootState) => state.category.category
  );

  // grab filtering value from local state
  const { searchTerm, sort, categories } = useAppSelector(
    (state: RootState) => state.filters
  );
  //fetching data
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery({
    category: selectedCategory,
    searchTerm,
    sort,
    categories,
  });
  // reset filters
  const handleFilterReset = () => {
    dispatch(clearCategory());
  };
  //if state is loading return loading page
  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <ProgressBar></ProgressBar>
      </div>
    );
  }
  //if state is error return error page
  if (error) {
    return (
      <div className="h-full flex justify-center items-center">
        <ErrorPage></ErrorPage>
      </div>
    );
  }

  return (
    <>
     <Helmet>
        <title>Fitness Club | Product</title>
      </Helmet>

      <div
        className="hero min-h-96"
        style={{
          backgroundImage: "url(/public/img/b2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full space-y-10">
            <h1 className="mb-5 md:text-8xl text-4xl font-bold ">Welcome to Fitness Club Product</h1>
            <p className=" mm:text-2xl">
              Your one-stop shop for premium gym equipment and accessories.
              Elevate your fitness journey with our top-quality products.
            </p>
            
          </div>
        </div>
      </div>
      <div className="m-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 lg:w-11/12 mx-auto">
          <SearchBar></SearchBar>
          {/* category */}
          <Category></Category>
          {/* sorting */}
          <Sorting></Sorting>
          {/* clear button */}
          <ClearFilterButton></ClearFilterButton>
        </div>
        <h2 className="text-5xl text-center font-bold mb-10 russo-one-regular text-gray-700 mt-16">
        Fitness Club Products
        </h2>
        {selectedCategory && (
          <div className="mb-4 lg:pl-16">
            <span className="lg:text-lg text-gray-500 mr-2">Category: {selectedCategory}</span>
            <button
              className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleFilterReset}
            >
              Clear Filter
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
          {products?.data?.map((product: TProduct) => (
            <div key={product._id} className="border p-4 bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="font-semibold text-gray-800 text-2xl mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 text-lg  md:text-xl lg:text-xl mb-6">
                Price: ${product.price}
              </p>
              <button
                onClick={() => handleViewDetails(product?._id as string)}
                className="inline-block px-5 py-2 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
