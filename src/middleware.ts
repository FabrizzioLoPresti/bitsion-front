import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getProfile } from './actions/actions'
 
export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  if(!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const data = await getProfile()
  if(!data) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard',
}