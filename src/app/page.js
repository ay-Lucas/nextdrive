export const dynamic = "force-dynamic";

import { SignedOut, SignedIn } from "@clerk/nextjs";

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn></SignedIn>
    </main>
  );
}
