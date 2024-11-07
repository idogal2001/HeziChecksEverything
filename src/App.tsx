import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import CartList from "./Pages/CartList.tsx";
import HomePage, { amountContext } from "./Pages/HomePage.tsx";
import ProductPage from "./Pages/ProductPage.tsx";
import NotFoundPage from "./Pages/NotFoundPage.tsx";

interface Counter {
  number: number;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/CartList",
    element: <CartList />,
  },
  {
    path: "/ProductPage",
    element: <ProductPage />,
    errorElement: <NotFoundPage />,
    children: [{ path: ":id", element: <ProductPage /> }],
  },
]);

const App = () => {
  const [amount, setAmount] = useState<Counter>({ number: 0 });

  return (
    <amountContext.Provider value={[amount, setAmount]}>
      <RouterProvider router={router} />
    </amountContext.Provider>
  );
};

export default App;
