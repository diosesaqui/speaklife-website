import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // A/B test only on homepage
  if (request.nextUrl.pathname === '/') {
    let variant = request.cookies.get('ab-hero')?.value

    if (!variant || (variant !== 'a' && variant !== 'b')) {
      variant = Math.random() < 0.5 ? 'a' : 'b'
      response.cookies.set('ab-hero', variant, {
        maxAge: 60 * 60 * 24 * 30, // 30 days — same visitor sees same variant
        httpOnly: false, // readable by analytics client
        sameSite: 'lax',
        path: '/',
      })
    }
  }

  return response
}

export const config = {
  matcher: '/',
}
