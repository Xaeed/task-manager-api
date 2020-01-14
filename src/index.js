const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const dotnet=require('dotenv')

dotnet.config({
    path:'src/config/development.env'
})

const app = express()
const port = process.env.PORT  || 30000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' ,port)
})
