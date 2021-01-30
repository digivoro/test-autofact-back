require("./config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

// Enable CORS
app.use(cors());

// Parse application/json
app.use(bodyParser.json());

// Server routes
app.use(routes);

// MongoDB connection
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

// mongoose.connect(process.env.DB_URI, connectionOptions, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Conexión establecida con la base de datos.");
//   }
// });

// Server listen
app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado en el puerto ${process.env.PORT}.`);
});
