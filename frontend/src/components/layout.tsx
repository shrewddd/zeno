import type { ReactNode } from "react"
import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto] bg-black text-white">
      <Header/>
      <main className="flex min-h-0 overflow-auto p-6">
        {children}
      </main>
      <Footer/>
    </div>
  )
}
