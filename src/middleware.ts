import {NextRequest, NextResponse } from 'next/server'
export { default } from "next-auth/middleware"
 import { getToken } from 'next-auth/jwt'
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({req:request});
  console.log('middleware token')
  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url))
    
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
	'/sign-in',
  '/dashboard'
  ],
}