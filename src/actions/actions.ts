'use server'

import { revalidateTag } from "next/cache"
import { Cliente } from "@/types/types"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

export const addCliente = async (formData: FormData, id: number | undefined) => {
  const token = cookies().get('token')?.value
  console.log( token )

  if(!token) return

  const nombrecompleto = formData.get('nombrecompleto') as string
  const edad = formData.get('edad') as string
  const genero = formData.get('genero') as string
  const estado = formData.get('estado') as string
  const maneja = formData.get('maneja') as string
  const lentes = formData.get('lentes') as string
  const diabetico = formData.get('diabetico') as string
  const enfermedad = formData.get('enfermedad') as string

  if(!nombrecompleto || !edad || !genero || !estado) {
    return
  }

  const cliente: Cliente = {
    nombrecompleto,
    edad: Number(edad),
    genero,
    estado: estado === 'true',
    maneja: maneja === 'true',
    lentes: lentes === 'true',
    diabetico: diabetico === 'true',
    enfermedad
  }

  if(!id) {
    const response = await fetch(`${process.env.NEXT_BACKEND_URL}/clientes`, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-cache'
    })

    if(response.ok) {
      revalidateTag('posts')
    }
  } else {
    const response = await fetch(`${process.env.NEXT_BACKEND_URL}/clientes/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(cliente),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-cache'
    })

    if(response.ok) {
      revalidateTag('posts')
    }
  }
}

export const deleteCliente = async (id: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_BACKEND_URL}/clientes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${cookies().get('token')?.value}`
      }
    })
  
    if(response.ok) {
      return revalidateTag('posts')
    }

    switch(response.status) {
      case 401:
        return response.statusText
      case 500:
        const {message} = await response.json()
        return message
      default:
        return 'Error'
    }
  } catch (error) {
    console.log(error)
  }
}

export const createSession = async (formData: FormData) => {
  const nombrecompleto = formData.get('nombrecompleto') as string

  if(!nombrecompleto) {
    return
  }

  const response = await fetch(`${process.env.NEXT_BACKEND_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ nombrecompleto }),
    headers: {
      'Content-type': 'application/json'
    },
    cache: 'no-cache'
  })

  const { access_token: token } = await response.json()
  
  if(token) {
    cookies().set('token', token, {
      expires: new Date(Date.now() + 60 * 60 * 1000),
      httpOnly: true,
      maxAge: 60 * 60,
      name: 'token',
      path: '/',
      value: token
    })
    redirect('/')
  }
}

export const getProfile = async () => {
  const token = cookies().get('token')?.value

  if(!token) {
    return
  }

  const response = await fetch(`${process.env.NEXT_BACKEND_URL}/auth/profile`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    cache: 'no-cache'
  })

  const { username } = await response.json()

  return username
}

export const deleteSession = async () => {
  cookies().set('token', '', { expires: new Date(0) });
}