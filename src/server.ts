import express, { Request, Response} from "express";
import logger from 'morgan';

const app = express();
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get(
  '/',
  (req: Request, res: Response): Response =>
    res.status(200).send({
      message: 'Welcome to CentFinity API, how are you?',
    }),
)

app.use((req: Request, res: Response): Response => res.status(404).send({ message: 'Route not found' }))

const port = process.env.PORT || 4900

app.listen(port, (): void => console.log(`server listening at port ${port}`))

export default app;