import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const AuthPages = ["/signin", "/signup"];
const ProtectedPages = ["/dashboard"];

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if (AuthPages.includes(req.nextUrl.pathname)) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }
  if (ProtectedPages.includes(req.nextUrl.pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  const authMiddleware = await withAuth({
    pages: {
      signIn: `/signin`,
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}
