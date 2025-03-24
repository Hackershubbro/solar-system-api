const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    quick_facts: {
        size: String,
        surface_water: String,
        composition: String,
        name_origin: String,
        temperature: {
            type: String,
            default: "N/A"
        },
        storm: {
            type: String,
            default: "N/A"
        }
    },
    namesake: {
        origin: String
    },
    potential_for_life: {
        habitability: String,
        water: String,
        climate_change: String,
        clouds: {
            type: String,
            default: "N/A"
        },
        radiation: {
            type: String,
            default: "N/A"
        }
    },
    size_and_distance: {
        equatorial_diameter: String,
        distance_from_sun: String,
        astronomical_unit: String,
        light_travel_time: String
    },
    orbit_and_rotation: {
        rotation_period: String,
        orbital_period: String,
        leap_year: String,
        axial_tilt: String,
        seasons: String
    },
    moons: {
        count: Number,
        description: String,
        formation: String,
        sizes: {
            type: Map,
            of: String
        },
        distances_from_planet: {
            type: Map,
            of: String
        }
    },
    rings: {
        existence: {
            type: String,
            default: "None"
        },
        description: String,
        width: String,
        thickness: String
    },
    formation: {
        age: String,
        process: String
    },
    structure: {
        layers: [{
            name: String,
            composition: String,
            radius: String,
            state: String,
            thickness: {
                land: String,
                ocean: String
            }
        }]
    },
    surface: {
        features: [String],
        largest_volcano: String,
        deepest_canyon: String,
        polar_ice_caps: String
    },
    atmosphere: {
        composition: {
            carbon_dioxide: String,
            nitrogen: String,
            argon: String,
            other_gases: String
        },
        function: String
    },
    magnetosphere: {
        description: String,
        effect: String
    },
    key_features: [String]
});

module.exports = mongoose.model('Planet', planetSchema);