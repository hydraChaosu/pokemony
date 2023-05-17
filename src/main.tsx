import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundary";
import "./index.css";
import Root from "./routes/Root";
import store from "./store";
import { Provider } from "react-redux";
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
        loader: async ({ request, params }) => {
          // const url = new URL(request.url);
          // const offset = url.params.get("offset");
          // const limit = url.params.get("limit");
          // return searchProducts(searchTerm);
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`
          );
          if (res.status === 404) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.json();
        },
      },
      {
        path: "/pokemail",
        element: <div>Pokemail!</div>,
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
