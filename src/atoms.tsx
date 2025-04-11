import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const objectAtom = atom({ username: "Jeremias", id: 1234 });

export const idState = atom((get) => get(objectAtom).id);

export function TextInput() {
  const [user, setUser] = useAtom(objectAtom);

  const onChange = (event) => {
    setUser({ ...user, id: Number(event.target.value) });
    console.log(user);
  };

  return (
    <div>
      {" "}
      <input type="number" onChange={onChange} />
      <h1>{user.id}</h1>
    </div>
  );
}
