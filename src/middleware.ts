import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { isAdmin } from './module/admin/lib/admin';

const adminRoutes = createRouteMatcher([
  "/admin(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)"
])

export default clerkMiddleware(async (auth, request) => {
  if (adminRoutes(request)) {
    const { userId } = await auth();

    if (userId && !isAdmin(userId)) {
      return NextResponse.redirect(new URL('/logout', request.url))
    }

    if (!userId) {
      await (await auth()).redirectToSignIn();
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};