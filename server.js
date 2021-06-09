const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");

const app = express();
dotenv.config();
connectDB();

app.set("view engine", "ejs");
app.set('views',path.resolve(__dirname,"views"))


app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", dataRoutes);

app.use((err, req, res, next) => {
  res.json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
