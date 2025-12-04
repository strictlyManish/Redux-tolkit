import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./app/features/ProductSlice";

function App() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-10 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Redux Toolkit Store</h1>

      <div className="flex justify-center">
        <button
          onClick={() => dispatch(getProducts())}
          className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Load Products
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <p className="text-center mt-5 text-gray-300 text-lg">Loading...</p>
      )}

      {/* Error State */}
      {error && (
        <p className="text-center mt-5 text-red-500 text-lg">{error}</p>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {products &&
          products.map((obj) => (
            <div
              key={obj.id}
              className=" rounded-xl overflow-hidden "
            >

              <img
                src={obj.thumbnail}
                alt={obj.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{obj.title}</h3>
                <span>❤️</span>

                <p className="text-yellow-400 font-bold mb-2">${obj.price}</p>

                <p className="text-gray-400 text-sm mb-3">
                  {obj.description.slice(0, 85)}...
                </p>

                <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-lg font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
