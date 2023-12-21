import Head from "next/head"

export default function RootTemplate({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}