import Link from "next/link";

function createGame() {
  return (
    <div>
      <h1>Create Game</h1>
      {/* Form to create a new game */}
      <Link href="/dashboard/admin">Back to Dashboard</Link>
    </div>
  );
}

export default createGame;
