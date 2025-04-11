import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";
import useCategory from "../hooks/useCategory";

function Category() {
  const { products } = useCategory();

  if (!products.length) return <Spinner />;

  return (
    <div className="max-w-5xl mx-auto space-y-10 px-4">
      <ul className="grid xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10">
        {products.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </ul>
    </div>
  );
}

export default Category;
