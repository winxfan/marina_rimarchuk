import React from 'react';
import { AppLayout } from "./AppLayout";
import { ErrorCatch } from "../components/ErrorCatch";
import { Provider } from "react-redux";
import { store } from '../store'
import { AppRoutes } from "./AppRoutes";
import {BrowserRouter} from "react-router-dom";

export const App = () => {
  return (
    <ErrorCatch>
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout>
            <AppRoutes/>
          </AppLayout>
        </BrowserRouter>
      </Provider>
    </ErrorCatch>
  );
};
