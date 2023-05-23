import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundary";
import "./index.css";
import Root from "./routes/Root/Root";
import store from "./store";
import { Provider } from "react-redux";
import LoadingSpinner from "./component/LoadingSpinner";
const ErrorPage = React.lazy(() => import("./routes/ErrorPage"));
const NotFound = React.lazy(() => import("./views/NotFound/NotFound"));
const PokeInfo = React.lazy(() => import("./views/PokeInfo/PokeInfo"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

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
        path: "/pokeinfo/:currentPage",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PokeInfo />
          </Suspense>
        ),
        loader: async ({ request, params }) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?offset=${
              Number(params.currentPage) * 20
            }&limit=20`
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
