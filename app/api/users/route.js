import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    if (!userData.password || !userData.firstName || !userData.email) {
      return NextResponse.json(
        { error: "Please fill out all fields" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    await userData.create({
      firstName: userData.firstName,
      email: userData.email,
      password: hashedPassword,
    });
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
