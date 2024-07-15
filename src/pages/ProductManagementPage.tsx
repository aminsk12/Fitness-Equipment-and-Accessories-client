import { NavLink } from "react-router-dom";
import ErrorPage from "../components/ui/global/ErrorPage";
import ProgressBar from "../components/ui/global/ProgressBar";
import { useDeleteProductMutation, useGetProductsQuery } from "../redux/features/product/productApi";
import { TProduct } from "../types";
import { toast } from "sonner";
import { Helmet } from "react-helmet";
import banner from "../assets/img/b3.webp"


const ProductManagementPage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  if (isLoading) {
    return <ProgressBar></ProgressBar>;
  }
  if (error) {
    return <ErrorPage></ErrorPage>;
  }
  //handle delete
  const handleDelete = (id: string) => {
    deleteProduct(id);
    toast.success("Product deleted successfully");
  };

  return (
    <>
     <Helmet>
        <title>Fitness Club | Product Management</title>
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
            <h1 className="mb-5 md:text-8xl text-4xl font-bold ">Welcome to Fitness Club Products Management</h1>
            <p className=" mm:text-2xl">
              Your one-stop shop for premium gym equipment and accessories.
              Elevate your fitness journey with our top-quality products.
            </p>
            
          </div>
        </div>
      </div> 
      <div className="overflow-x-auto mb-8">
        <h1 className="text-4xl text-gray-600 mt-10 text-center font-bold mb-4">Product Management</h1>
        <table className="table mt-14 w-9/12 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products?.data?.map((product: TProduct, index: number) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product?.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td className="py-2 px-4 border-b">
                  <NavLink to={`/products/update/${product._id}`}>
                    <button className="bg-yellow-500 text-white py-1 px-2 rounded mr-2">
                      Update
                    </button>
                  </NavLink>
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded"
                    onClick={() => handleDelete(product._id!)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <NavLink to="/products/create-product">
            <button className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-10">
              Create New Product
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ProductManagementPage;



