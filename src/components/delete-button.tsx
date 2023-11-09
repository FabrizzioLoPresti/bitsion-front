'use client'

import { deleteCliente } from "@/actions/actions"

type Props = {
  id: number
}

const DeleteButton = ({id}: Props) => {
  return (
    <button
      onClick={async () => {
        await deleteCliente(id)
      }}
      className="bg-red-600 rounded-md px-4 py-2"
    >
      Eliminar
    </button>
  )
}

export default DeleteButton