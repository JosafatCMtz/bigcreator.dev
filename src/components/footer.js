import * as React from "react"

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center">
      <p className="text-smoky-black">
        Made with ❤️ in MX © {new Date().getFullYear()} &middot; Bigcreator
      </p>
    </footer>
  )
}
