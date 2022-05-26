// import users from "./routes/users
require('dotenv').config();
const express = require("express")
const router = express.Router();
const bodyParser = require("body-parser")
// const router = require("./routes")
const users = require('./routes')
// const exp = require('constants');
// dotenv.config()
const port = 3000

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ "hello": "world" })
})

app.use('/api', users );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
