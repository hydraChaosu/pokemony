import React, { ReactElement, Suspense } from "react";
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
const PokeDetails = React.lazy(() => import("./views/PokeDetails/PokeDetails"));
import {
  QueryClient,
  QueryClientProvider,
  QueryObserverResult,
} from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

type FetchPokemonDataResult = QueryObserverResult<PokemonData, Response>;
type FetchPokemonDataQueryKey = [`pokemonData${string}`];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/pokemondle",
        element: <div>Pokemondle!</div>,
        index: true,
      },
      {
        path: "/pokeinfo/:currentPage",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PokeInfo />
          </Suspense>
        ),
        loader: async ({ params }) => {
          const currentPage = Number(params.currentPage) || 1;
          const response: FetchPokemonDataResult = await queryClient.fetchQuery(
            [`pokemonData${currentPage}`] as FetchPokemonDataQueryKey,
            {
              queryFn: () =>
                fetch(
                  `https://pokeapi.co/api/v2/pokemon/?offset=${
                    Number(Number(currentPage) - 1) * 40
                  }&limit=40`
                ),
            }
          );
          if (response.status === "error") {
            throw new Response("Not Found", { status: 404 });
          }
          return response;
        },
      },
      {
        path: "/pokemon/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PokeDetails />
          </Suspense>
        ),
        loader: async ({ params }) => {
          const response = await queryClient.fetchQuery(
            [`pokemonData${params.id}`],
            {
              queryFn: () =>
                fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`),
            }
          );
          if (response.status === 404) {
            throw new Response("Not Found", { status: 404 });
          }
          return response;
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
