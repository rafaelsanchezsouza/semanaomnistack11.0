const express = require("express");
const cors = require( "cors");
const { errors } = require("celebrate");
const routes = require( "./routes");

//inicializa aplicação
const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use(errors());

//ouvir porta 3333
app.listen(3333);