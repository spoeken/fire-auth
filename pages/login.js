import {} from "yup";

import React, { useEffect, useState } from "react";
import { object, string } from "yup/lib/locale";

import Link from "next/link";
import firebase from "../utils/firebase";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = object().shape({
  email: string().required("Dette feltet er påkrevd"),
  password: string().required("Dette feltet er påkrevd"),
});

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "mathias@feed.no",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form data", data);

    // try {
    //   await firebase.auth().signInWithEmailAndPassword(email, password);
    //   console.log("Du har blitt logget inn");
    // } catch (error) {
    //   setError(error.message);
    //   console.log("Noe gikk galt");
    // }
  };
  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" placeholder="Email" ref={register} />
        <input
          type="password"
          name="password"
          placeholder="Passord"
          ref={register}
        />
        <button type="submit">Registrer deg</button>
        {error && <p>{error}</p>}
      </form>
      <Link href="/login">Har du allere en bruker? Logg inn</Link>
    </div>
  );
};

export default Login;
