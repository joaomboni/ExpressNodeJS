import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jbonifacio:12Hoquei34@cluster0.6tgcdqn.mongodb.net/projeto-node?");

let db = mongoose.connection;

export default db;