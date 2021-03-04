import React, { useEffect, useState } from "react";

const Test = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <h1>Hello world {user && user}</h1>
    </>
  );
};

export default Test;
