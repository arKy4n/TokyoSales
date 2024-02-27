import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/product/display"
        );

        // console.log(response.data.productData);

        setProducts(response.data.productData);
      } catch (err) {
        console.log("Error Message: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <h2>Products</h2>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      <div className="products-container">
        {products.map((product) => (
          <div key={product.productid}>
            <h3>{product.productname}</h3>
            <p>{product.description}</p>
            <p>{product.image_path}</p>
            <img
              src={`http://localhost:5000/uploads/${product.image_path}`}
              alt={product.productname}
            />
          </div>
        ))}
      </div>
      {/* <img
        src={"http://localhost:5000/Storage/1708602205338-Parrot.png"}
        alt="name"
      /> */}
    </>
  );
}

export default Home;
