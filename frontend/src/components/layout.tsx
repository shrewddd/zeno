import type { ReactNode } from "react"
import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-dvh grid-rows-[auto_minmax(0,1fr)_auto] bg-black text-white">
      <Header/>
      <main className="flex min-h-0 overflow-auto p-6">
        {children}
      </main>
      <Footer/>
    </div>
  )
}
