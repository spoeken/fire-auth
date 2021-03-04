import React, { useEffect } from "react";

import firebase from "../utils/firebase";
import { useAuth } from "../utils/auth";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const userContext = useAuth();

  useEffect(() => {
    console.log("The context", userContext);
  }, [userContext]);

  const handleSignout = async () => {
    await firebase.auth().signOut();
    router.push("/");
  };

  return (
    <div>
      <p>Profile</p>
      <button onClick={handleSignout}>Sign out</button>
      {userContext && (
        <>
          <p>{userContext.email}</p>
          <p>{userContext.uid}</p>
        </>
      )}
    </div>
  );
};

export default Profile;
