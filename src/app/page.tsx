import ClientesList from "@/components/clientes-list"
import { Clientes } from "@/types/types"

const fetchClientes = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/clientes`, {
      cache: 'no-cache',
      next: {
        tags: ['clientes']
      }
    })
    if(!res.ok) throw new Error(res.statusText)

    const data: Clientes = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const clientes = await fetchClientes()
  return (
    <main className="mx-auto max-w-7xl">
      <h1 className="text-4xl text-center">Clientes</h1>
      {
        clientes && clientes.length > 0 ? (
          <ClientesList clientes={clientes} />
        ) : (
          <p className="text-center">No hay clientes</p>
        )
      }
    </main>
  )
}
