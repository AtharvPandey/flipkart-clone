import { products } from "./constant/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);

    console.log("Data imported Sucessfully");
  } catch (error) {
    console.log("Error while  Inserting Default Data", error.message);
  }
};

export default DefaultData;
