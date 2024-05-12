import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, task, link, state } = await request.json();
  await connectMongoDB();

  // Find a task with the same email and task id and update it, or create a new one if it doesn't exist
  await Task.findOneAndUpdate(
    { email, task }, // search criteria
    { email, task, link, state }, // data to update with
    { upsert: true, new: true, setDefaultsOnInsert: true } // options
  );

  return NextResponse.json({ message: "Task Registered" }, { status: 201 });
}

export async function GET(request) {
  if (request.method === 'GET') {
    await connectMongoDB();

    const email = request.nextUrl.searchParams.get('email');
    const task = request.nextUrl.searchParams.get('task');

    // Find a task with the given email and task id
    const empdata = await Task.findOne({ email, task });

    return NextResponse.json(empdata);
  } else {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }
}
