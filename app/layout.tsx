import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import Background from "@/components/ui/background"
import { ToasterProvider } from "@/components/toaster-provider"
import { ModalProvider } from "@/components/modal-provider"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { dark } from "@clerk/themes"

import "./globals.css"

const font = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "GifGen| Generate Gif with AI",
    template: "%s | GifGen",
  },
  description: "Your go to AI tool for gif generation",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "hsl(83 92% 65%)",
          colorTextOnPrimaryBackground: "hsl(0 0% 0%)",
          colorBackground: "hsl(0 0% 0%)",
        },
        elements: {
          formButtonPrimary: cn(buttonVariants({ className: "capitalize" })),
          socialButtonsBlockButton: cn(
            buttonVariants({
              variant: "outline",
              className: "bg-transparent",
            })
          ),
          card: "border-2 border-border border-dashed ",
          formFieldInput: "border-2 border-border bg-transparent",
        },
        layout: {
          logoImageUrl: "/logo.svg",
          logoLinkUrl: "/",
          socialButtonsVariant: "blockButton",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "w-full overflow-x-hidden")}>
          {children}
          <ToasterProvider />
          <ModalProvider />
          <Background />
        </body>
      </html>
    </ClerkProvider>
  )
}
