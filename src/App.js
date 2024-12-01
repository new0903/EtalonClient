import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductPage, CategoryPage, UserListPage, AuthorizationPage, HomePage } from "./pages/index.js";
import { StoreService } from './shared/lib/services/storeService.js';
import { EditProductPage } from './pages/EditProductPage/ui/index.js';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage extraClasses={["categoryPage--active"]} />} /> 
          <Route path="/product" element={<ProductPage extraClasses={["productPage--active"]} />} />
          <Route path="/userList" element={<UserListPage extraClasses={["userListPage--active"]} />} />
          <Route path="/authorization" element={<AuthorizationPage extraClasses={["authorizationPage--active"]} />} />
          <Route path="/editProduct" element={<EditProductPage extraClasses={["authorizationPage--active"]} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
