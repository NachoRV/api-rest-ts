import "dotenv/config";
import { connect } from "mongoose";


async function dbConnect(): Promise<void> {
  const URI = <string>process.env.DB_URI;
  await connect(URI)
  
}


export default dbConnect;

