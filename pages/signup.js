import React, { useState } from "react";

import Link from "next/link";
import firebase from "../utils/firebase";

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("Du har laget en bruker");
    } catch (error) {
      setError(error.message);
      console.log("Noe gikk galt");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Passord"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrer deg</button>
        {error && <p>{error}</p>}
      </form>
      <Link href="/login">Har du allere en bruker? Logg inn</Link>
    </div>
  );
};

export default Signup;
