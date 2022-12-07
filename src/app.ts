import express, { Express } from 'express'
import apiGateway from "~/src/middleware/apiGateway"
import rateLimitter from "~/src/middleware/rateLimitter"

// Create Express server
const app: Express = express()

// Set app level environment
app.set('port', process.env.BACKEND_PORT || 8000)
app.set('env', process.env.NODE_ENV || "development")

// Middleware options

/** Application Request Handlers * */
app.use(rateLimitter)
app.use(apiGateway)
export default app
