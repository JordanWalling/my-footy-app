import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json({ message: "Login successful", status: 200 });
}
