const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')
const users = require("./routes/users");

app.use(express.json())
app.use(cors())

app.use("/users", users);

app.listen(port, () => {
  console.log("connected successfully on port", port);
});
