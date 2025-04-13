const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const skillsRoutes = require('./routes/skills');
const { PORT } = require("./config");
const connectMONGODB = require("./connectDb");

const app = express();
app.use(express.json())
app.use(cors());
app.use('/skills',skillsRoutes)

connectMONGODB(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
