'use client'

import { createSession } from "@/actions/actions"

type Props = {}

export default function LoginPage({}: Props) {
  return (
    <div className='mx-auto max-w-7xl'>
      <form action={async (formData: FormData) => {
        await createSession(formData)
      }} className='w-1/2 flex flex-col'>
        <label htmlFor="nombrecompleto">Nombre Completo:</label>
        <input type="text" name="nombrecompleto" id="nombrecompleto" className='text-black' />

        <button type='submit' className='w-fit self-center bg-slate-600 px-4 py-2 rounded-md mt-5'>Enviar</button>
      </form>
    </div>
  )
}