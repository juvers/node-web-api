const express = require("express");
const cors = require("cors");

const app = express();

const corsOption = {
    origin: "http://localhost:8080"
}

app.use(cors(corsOption));

// parse requests of content-type - application/json
app.use(express.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// app.get("/", (req, res) => res.json({'message': "Base web api starts"}));

require("./routes/tutorial.routes.js")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
