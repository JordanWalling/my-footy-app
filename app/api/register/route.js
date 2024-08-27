import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request) {
  const { firstName, email, password, role } = await request.json();
  try {
    if (!email || !password || !firstName) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }
    await dbConnect();
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "Email already exists." },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      firstName,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    await newUser.save();
    return NextResponse.json(
      { message: "User created successfully." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
