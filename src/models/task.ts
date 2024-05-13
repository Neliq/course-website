import mongoose, { Schema, models } from "mongoose";

const TaskSchema = new Schema(
  {
    email: String,
    task: String,
    link: String,
    state:String,
    },
  { timestamps: true }
);

const Task = models.Task || mongoose.model("Task", TaskSchema);
export default Task;