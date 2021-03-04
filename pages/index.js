import Head from "next/head";
import firebase from "../utils/firebase";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(async () => {
    const usersSnapshot = await firebase.firestore().collection("users").get();

    const users = [];
    usersSnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      users.push(doc.data());
    });
    console.log("users", users);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fire auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello</h1>
      </main>
    </div>
  );
}
