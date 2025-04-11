import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../index";
import * as css from "./layout.module.css";

const root = { backgroundColor: "aqua" };
const footerStyle = { border: "solid 3px aqua" };

function Layout() {
  const [rootStyles, setRootStyles] = useState({ backgroundColor: "aqua" });
  const data = useContext(MyContext);

  function clickHandler() {
    setRootStyles({ backgroundColor: "blue" });
  }
  return (
    <div className={css.root}>
      <header>Soy el header y tengo el dato: {data.username}</header>
      <Outlet />
      <footer style={footerStyle}>Soy el footer</footer>
    </div>
  );
}

export { Layout };
