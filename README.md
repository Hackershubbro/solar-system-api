# Solar System API 🌌

A comprehensive REST API providing detailed astronomical data about all planets in our solar system, including the Sun.

## Features ✨

- Complete planetary data including structure, atmosphere, and geological features
- Standardized JSON response format for all celestial bodies
- RESTful endpoints with intuitive naming
- MongoDB backend for flexible data storage
- Pre-seeded database with accurate astronomical data

## Installation ⚙️

### Prerequisites
- Node.js (v14 or later)
- MongoDB (v4.4 or later)
- npm (v6 or later) or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/your-repo/solar-system-api.git
cd solar-system-api

# Install dependencies
npm install

# Seed database with planetary data (optional)
npm run seed

# Start the server (runs on port 8000)
npm start
```
# API Endpoints
# Get All Celestial Bodies
```
GET /api
```

# Get Specific Planet
```
GET /api/:planetName
```
Supported planet names: mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, sun

# JS
// Fetch Earth data
```
fetch('http://localhost:8000/api/earth')
  .then(response => response.json())
  .then(data => console.log(data));
 ``` 
# Data Fields
- Each planet includes these detailed sections:

- Basic information and description

- Quick facts

- Size and distance measurements

- Orbit and rotation details

- Moon and ring information

- Planetary structure (core, mantle, crust)

- Surface features

- Atmospheric composition

- Magnetosphere details

- Key features


## Response Structure 📊
Each celestial body includes these detailed sections:

- Overview: Basic information and description

- Quick Facts: Key statistics at a glance

- Measurements: Size and distance data

- Orbital Characteristics: Rotation and revolution details

- Satellites: Moon and ring system information

- Structure: Core, mantle, crust composition

- Surface: Geological features and terrain

- Atmosphere: Composition and layers

- Magnetosphere: Magnetic field characteristics

- Exploration: Mission history and discoveries
