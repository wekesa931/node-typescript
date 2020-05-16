import express, { Request, Response} from "express";
import logger from 'morgan';
import cors from 'cors'
import { routerV1 } from "./api/v1/V1";

// Set up the express app
const app = express()

// Enable CORS
app.use(cors())


// Parse incoming requests data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.disable('x-powered-by')
app.use('/v1', routerV1)

// Return 404 for nonexistent routes
app.use((req: Request, res: Response): Response => res.status(404).send({ message: 'Route not found' }))

// Set Port
const port = process.env.PORT || 4900

app.listen(port, (): void => console.log(`server listening at port ${port}`))

export default app