const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = 4000;

app.use(bodyParser.json());

//mounting routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const tokenRoutes = require("./routes/tokenRoutes");
const videoRoute = require("./Routes/video");
const commentRoutes = require("./Routes/comment");

app.use("/api", authRoutes); //authentication route mount point for /api prefix
app.use("/api", userRoutes); //user route mount point for /api prefix
app.use("/api", tokenRoutes); //token route mount point for /api prefix
app.use("/api", videoRoute); //video route mount point for /api prefix
app.use("/api", commentRoutes); //comment route mount point for /api prefix

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected To DB.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
