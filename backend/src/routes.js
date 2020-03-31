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
routes.post("/ongs", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }),
}), OngController.create);

routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

// CASOS
routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post("/incidents", IncidentController.create);

routes.delete("/incidents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })    
}), IncidentController.delete);

module.exports = routes;