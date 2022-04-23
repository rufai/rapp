//Style
import "./style.css";

//Component
import StoreItem from "../StoreItem";

//Data
import ecommerce from "../data/store";

// Store(parent) ---> StoreItem(Child)

const link = "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
const Store = () => {
  // All The Items

  return (
    // keywords ( css , js, html )
    // js will stay
    // html/css will change
    <section className="parent">
      <StoreItem
        title="Jumbo Jumbo"
        price="5322112"
        description="ewwerwe"
        url={link}
      />
      {ecommerce.map((product) => (
        <StoreItem
          title={product.title}
          price={product.price}
          description={product.description}
          url={product.image}
          id={product.id}
          key={product.title + product.id}
        />
      ))}
    </section>
  );
};

export default Store;
