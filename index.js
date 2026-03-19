const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db/connectDB");
const cnoacRouter = require("./routes/routes");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/notFound");
const app = express();

// Environmenal variable
dotenv.config();

// App level middleware
app.use(morgan("dev"));

// App router
// /legal/api/v1 - Resources
app.use("/legal/api/v1", cnoacRouter);

// End Middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.SERVER_PORT || 8000;

// Start server
const start = async () => {
  try {
    // Connect to databas
    await connectDB(process.env.MONGO_URI);

    // Start the server
    app.listen(PORT, () => {
      console.log(`


        http://localhost:${PORT}

        Welcome to SDO Tacloban City Legal Unit Online Service.
        Mainted by: JAN JOSHUA I. MACANIP /LEGAL ASSISTANT - I
    `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
