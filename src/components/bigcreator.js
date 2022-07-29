import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Bigcreator() {
  return (
    <StaticImage
      src="../images/icon.png"
      alt="A bigcreator.dev Icon"
      placeholder="blurred"
      layout="fixed"
      width={56}
      height={56}
    />
  )
}
