import "dotenv/config";
import mongoose, { connect, disconnect } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoMemoryServer: MongoMemoryServer;
mongoose.set('strictQuery', true);

async function dbConnect(): Promise<void> {
  let URI = <string>process.env.DB_URI;
  if (process.env.NODE_ENV === 'test') {
    mongoMemoryServer = await MongoMemoryServer.create();
    URI = mongoMemoryServer.getUri()
  }
  await connect(URI)
  
}

export const dbDisconnect = () => {
  mongoMemoryServer.stop()
}


export default dbConnect;

