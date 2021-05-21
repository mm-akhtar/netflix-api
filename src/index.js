const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const userRouter = require("./routes/user");
const favRouter = require("./routes/fav");

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(favRouter);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is up on ${port}`);
});
