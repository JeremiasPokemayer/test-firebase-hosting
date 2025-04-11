import React, { useState, useEffect } from "react";

export function useUsername() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  });
  return data?.username;
}
