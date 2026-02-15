import React from "react"
import Image from "next/image"
// -> Importando todos os background's da tela
import BgHomePage from "@/assets/background/home-page.svg"

export default function Home() {
  return (
    <div className="w-full">
      <Image
        src={BgHomePage}
        alt="Background Home Page"
        className="w-full h-auto"
        priority
      />
    </div>
  )
}
