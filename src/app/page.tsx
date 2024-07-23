"use client";

import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return (
    <div>
      {data ? (
        <div>
          <h1>Welcome {data.user.email}</h1>
          <p>Your session is active</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          <h1>Not signed in</h1>
          <p>You are not signed in</p>
        </div>
      )}
    </div>
  );
}
