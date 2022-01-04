import Product from "./Product/Product";
import "./Products.css";

const Products = ({ ProductsArr }) => (
  <section className="products">
    {ProductsArr.map((item) => (
      <Product
        key={item.id}
        title={item.title}
        id={item.id}
        price={item.price}
        image={item.image}
      />
    ))}
  </section>
);

export default Products;
