import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<usr>:<password>@cluster0.6tgcdqn.mongodb.net/<DB>?");

let db = mongoose.connection;

export default db;