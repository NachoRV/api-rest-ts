import 'dotenv/config';
import  express from "express";
import cors from "cors";
import db from './config/mongo';

import { router } from './routes'

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json())
app.use(router);
db().then(() => {
  console.log('BD connected')
})

app.listen(PORT, () => { 
  console.log(`App listening on port: ${PORT}`)
})

export default app




