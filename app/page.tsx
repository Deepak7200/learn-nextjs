'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

    const { data: session } = useSession()
    if (session) {
      return (
        <>
          Signed in as {session.user?.email ?? "Email not available"} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
  
  return (
    <div>
      Not signed in <br />
      <button className="text-black bg-white" onClick={() => signIn("github")}>Sign in</button>
    </div>
  );
}
