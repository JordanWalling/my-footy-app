import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json({ message: "Registration successful", status: 200 });
}
