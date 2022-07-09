import express from 'express'
import users from "./routes/user.routes"

const app = express();

app.use(express.json());
app.use("/users", users)


export default app