import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <main className="min-h-screen flex justify-around items-center">
      <section className="h-full flex justify-around items-center">
        <SignIn />
      </section>
    </main>
  )
}
