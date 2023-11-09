import Link from "next/link"

type Props = {}

export default function NotFoundPage({}: Props) {
  return (
    <div className="mx-auto max-w-7xl h-screen flex flex-col gap-y-4 items-center justify-center">
      <h3>
        404 - Not Found
      </h3>

      <Link href="/">
        Vovler al inicio
      </Link>
    </div>
  )
}