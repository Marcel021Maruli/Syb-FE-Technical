import loadable from "@loadable/component";
import { RouteList } from "./modules/components/route-list";

const MovieList = loadable(() => import("./pages/movieList"));
const MovieDetail = loadable(() => import("./pages/movieDetail"));

export const routes = [
  {
    path: "/",
    name: "Anilist",
    exact: true,
    component: () => <MovieList />,
  },
  {
    path: "/anilist-list",
    name: "Anilist",
    component: () => <MovieList />,
  },
  {
    path: "/anilist-detail/:id",
    name: "Anilist-Detail",
    component: () => <MovieDetail />,
  }
];

const AppRoutes = () => <RouteList routes={routes} />;

export default AppRoutes;
