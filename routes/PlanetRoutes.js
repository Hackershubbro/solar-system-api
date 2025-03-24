const express = require('express');

const {
    getAllPlanets, 
    getPlanet,
    InsertPlanet
} = require("../controllers/planetController")

const router = express.Router();

router.route('/')
.get(getAllPlanets)
.post(InsertPlanet)


router.route("/:name")
.get(getPlanet)

module.exports = router;