import { useContext } from "react";
import { MyContext } from "../index";
import { TextInput } from "../atoms";

function Home() {
  const data = useContext(MyContext);
  return (
    <div>
      Dato: {data.username}
      <TextInput />
    </div>
  );
}

export { Home };
