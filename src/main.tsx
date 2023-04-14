import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundary";
import "./index.css";
import Root from "./routes/Root";
const ErrorPage = React.lazy(() => import("./routes/ErrorPage"));
const NotFoundView = React.lazy(() => import("./views/NotFoundView"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/pokemondle",
        element: <div>Pokemondle!</div>,
      },
      {
        path: "/pokeinfo",
        element: <div>Pokeinfo!</div>,
        //loader danych, pagging ,navigaton hook ,use navigation loader
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
