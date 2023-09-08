import { useState } from "react";
import "./styles/global.scss"
import Home from "./pages/home/Home";
import Employees from "./pages/Employees/Employees";
import Products from "./pages/products/products";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
function App() {
  // simpler way to layout your App / Layout. create a in page component and import the other components into her.
  const Layout = () => {
    return (
      <main className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>{" "}
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    );
  };

  // this is a cleaner way to use browser router, we create a aray of objects with our routes and thier paths inside
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/Employees", element: <Employees /> },
        { path: "/products", element: <Products /> },
      ], // the children prop allows us to provide paths for the childeren in our layout component. ie the other compenents being rendered on the home page
    },
    {path: "/login", element:<Login />}
  ]);

  return (
    <RouterProvider router={router} /> //Here is where you will call the RouterProvider and provide the router prop with the object array with your path and elements
  );
}

export default App;
