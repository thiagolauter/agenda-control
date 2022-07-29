import express from 'express'
import cors from 'cors'
import { routes } from './routes/index.routes'
import 'dotenv/config'


const app = express()
const port = process.env.PORT


app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`)
})