import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<user>:<senha>@cluster0.6tgcdqn.mongodb.net/<banco>?");

let db = mongoose.connection;

export default db;