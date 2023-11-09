import ComposePost from '@/components/compose-post'
import { notFound } from 'next/navigation'
// import ComposePost from '@/components/compose-post'

type Props = {
  params: {
    id: string
  }
}

const fetchCliente = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/clientes/${id}`, {
      cache: 'no-cache',
      next: {
        tags: ['cliente']
      }
    })
    if(!res.ok) throw new Error(res.statusText)

    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function ClienteEditPage({params: {id}}: Props) {
  const cliente = await fetchCliente(id)
  if(!cliente) return notFound()

  return (
    <div className="mx-auto max-w-7xl">
      <ComposePost cliente={cliente} />
    </div>
  )
}