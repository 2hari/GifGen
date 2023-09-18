"use client"

import Link from "next/link"
import { useAuth } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"

export const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Your Go To Tool for</h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#6AE886] via-[#A1FF50] to-[#B9F854]">
          Gif Generation
        </p>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        High Quality Gifs just a few clicks away.
      </div>
      <div>
        <Link href={isSignedIn ? "/video" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  )
}
