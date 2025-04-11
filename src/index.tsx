import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./router";
import { useUsername } from "./hooks";
import { atom, useAtom } from "jotai";

export const MyContext = React.createContext({ username: "" });

function App() {
  const userNameDelHook = useUsername();
  return (
    <MyContext.Provider value={{ username: userNameDelHook }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
