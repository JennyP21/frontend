import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <div>
      <h1>RagLab Dashboard</h1>
      <p>Clerk User ID: {userId}</p>
    </div>
  );
}