import { NextResponse } from "next/server";
import User from "@/app/(models)/user";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    // confirm data exists
    if (!userData?.email || !userData.password) {
      return NextResponse.json({ message: "Error", err }, { status: 400 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
