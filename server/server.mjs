import express from 'express';
import cors from 'cors';
import records from './routes/record.mjs'

const app = express();

const PORT = process.env.PORT || 5050

app.use(cors());
app.use(express.json())

app.use('/record',records)

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})