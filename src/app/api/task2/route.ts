import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request: any) {
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

export async function GET(request: any) {
  if (request.method === 'GET') {
    await connectMongoDB();

    const email = request.nextUrl.searchParams.get('email');

    // Count the tasks with the given email
    const count = await Task.countDocuments({ email });

    return NextResponse.json({ count });
  } else {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }
}

export async function DELETE(request: any) {
  const { email, task } = await request.json();
  await connectMongoDB();

  // Find a task with the given email and task id and delete it
  await Task.findOneAndDelete({ email, task });

  return NextResponse.json({ message: "Task Deleted" });
}
