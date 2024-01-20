import React from 'react';
import { ErrorBlock } from "../../components/ErrorBlock";

export const NotFoundPage = () => {
  return (
    <ErrorBlock code={404} description="Похоже что такой страницы не существует, вернитесь на главную"/>
  );
};
