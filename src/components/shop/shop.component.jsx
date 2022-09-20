import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../category-preview/category-preview.component";
import Category from "../../routes/category/category.component";
import "./shop.styles.css";

const Shop = () => {
  return (
  <Routes>
    <Route index element={<CategoryPreview />} />
    <Route path=":category" element={<Category />} />
  </Routes>
  );
};

export default Shop;
