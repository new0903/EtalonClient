import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductPage, CategoryPage, UserListPage, AuthorizationPage, HomePage } from "./pages/index.js";

function App() {
  return (
    <>
      {/* <IndexPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} /> 
          <Route path="/product" element={<ProductPage />} />
          <Route path="/userList" element={<UserListPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
