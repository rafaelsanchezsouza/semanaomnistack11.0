const express = require("express");
const OngController = require("./controllers/OngController");
const { celebrate, Segments, Joi } = require("celebrate");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
// const IncidentController = require("./controllers/IncidentController");

const connection = require("./database/connection");

const routes = express.Router();

// LOGIN
routes.post("/sessions", SessionController.create);

// LISTAGEM DE ONGS
routes.get("/ongs", OngController.index);
// CADASTRO
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);
// CASOS
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;