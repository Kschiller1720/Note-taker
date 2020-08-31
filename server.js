const express = require("express");
const compression = require("compression");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
// set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(compression());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));