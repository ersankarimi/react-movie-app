import { useRouteError } from "react-router-dom";
import React from "react";

export const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-4">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="font-semibold">{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
