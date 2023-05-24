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
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

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
          const response = await queryClient.fetchQuery(
            [`pokemonData${params.currentPage}`],
            {
              queryFn: () =>
                fetch(
                  `https://pokeapi.co/api/v2/pokemon/?offset=${
                    Number(params.currentPage) * 40
                  }&limit=40`
                ),
            }
          );
          if (response.status === 404) {
            throw new Response("Not Found", { status: 404 });
          }
          return response.json();
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
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>
);
