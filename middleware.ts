import { blackListDevices } from "@/data/version/deviceBlackList";
import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest, response: NextResponse) {
  const device = request.headers.get("user-agent")
  if (device) 
    if (blackListDevices.includes(device)) {
      return NextResponse.redirect(new URL("/produtos", request.url));
  }
}

export const config = {
  matcher: "/",
};
