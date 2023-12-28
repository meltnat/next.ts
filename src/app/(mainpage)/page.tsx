import Image from "next/image"

import { basePath } from "../../../next.config"
import { Metadata } from "next"
import Link from "next/link"
const BASE_PATH = basePath ? basePath : ""

export const metadata: Metadata = {
  title: ".#@ a.k.a meltnat",
}

export default function Page() {
  return (
    <main>
      <Link href="https://x.com/meltnat">
        <Image src={basePath+"/x-logo/logo-black.png"} alt="X logo" layout="fill" />
      </Link>
    </main>
  )
}