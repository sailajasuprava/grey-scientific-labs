import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import useHome from "../hooks/useHome";

function Home() {
  const { products, handleCategoryChange } = useHome();

  if (!products.length) return <Spinner />;

  const uniqueCategories = [];
  for (const product of products) {
    if (!uniqueCategories.includes(product.category)) {
      uniqueCategories.push(product.category);
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-10 px-4">
      <div>
        <label htmlFor="category" className="label text-lg">
          category :
        </label>
        <select name="category" id="category" onChange={handleCategoryChange}>
          <option value="">All</option>
          {uniqueCategories.map((item) => (
            <option key={item} value={item} className="input">
              {item}
            </option>
          ))}
        </select>
      </div>

      <ul className="grid xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10">
        {products.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
