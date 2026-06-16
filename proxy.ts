import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Next.js 16 "proxy" convention (formerly middleware).
// Lightweight, edge-safe auth instance (no DB) used to protect /admin routes.
const { auth } = NextAuth(authConfig);

export default auth;

export const config = {
  matcher: ['/admin/:path*'],
};
