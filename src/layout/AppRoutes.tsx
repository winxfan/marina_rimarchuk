import { Route, Routes } from "react-router-dom";
import {
  MainPage, NotFoundPage
} from "../pages";
import {ReactRouter6Adapter} from "use-query-params/adapters/react-router-6";
import {QueryParamProvider} from "use-query-params";
import {routes} from "./routes";

export const AppRoutes = () => {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Routes>
        <Route index path={routes.index.path} element={<MainPage/>}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </QueryParamProvider>
  );
};
