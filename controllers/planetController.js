const Planet = require('../models/Planet');

// Get all planets
const getAllPlanets = async (req, res) => {
    try {
        const planets = await Planet.find();
        res.json(planets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single planet by name
const getPlanet = async (req, res) => {
    try {
        const planet = await Planet.find({ name: req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1)});
        if (planet.length === 0) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        res.json(planet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Insert a new planet
const InsertPlanet = async (req, res) => {
    try {
        // Validate required fields
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }

        const planet = new Planet(req.body);
        const savedPlanet = await planet.save();
        res.status(201).json(savedPlanet);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPlanets,
    getPlanet,
    InsertPlanet
};