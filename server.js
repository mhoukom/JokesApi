const express = require("express");
const app = express();
const PORT = 8000;

// middleware
app.use(express.json(), express.urlencoded({extended: true}));

// connect mongodb
require("./config/mongoose.config");

require('./routes/joke.routes')(app);

app.listen(PORT, () => console.log(`server up on PORT: ${PORT}`));