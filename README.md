
# Last-Mile Delivery & Route Optimization

An intelligent logistics dispatch platform that automates package-to-driver allocation, optimizes delivery routes, and assists with recovery when delivery disruptions occur.

## Project Objective

To simplify last-mile logistics operations by building a system that can:

- Automatically allocate packages to suitable drivers.
- Generate optimized delivery routes.
- Visualize delivery routes on a map.
- Handle driver unavailability through dynamic reassignment.
- Use Gemini AI to assist with disruption analysis and recovery recommendations.
- Track basic delivery performance.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | React, TypeScript |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL |
| Optimization | Python, Google OR-Tools |
| AI Agent | Google Gemini API |
| Maps | Leaflet, OpenStreetMap |

## Architecture

The application uses a modular Node.js backend with separate Python optimization and AI services.

See [System Architecture](docs/architecture.md).

## Project Documentation

- [Requirements](docs/requirements.md)
- [Architecture](docs/architecture.md)
- [Technology Decisions](docs/decisions.md)

## Development Roadmap

1. Project understanding and setup
2. Backend foundation
3. Database and core APIs
4. React dashboard
5. Dispatch workflow
6. Route optimization
7. Dynamic reassignment
8. Gemini AI agent
9. Testing and documentation

## Initial Scope

The first version uses simulated delivery operations and disruptions. Live GPS tracking, traffic integration, payments and real fleet integration are outside the initial scope.

## Project Status

Currently completing Milestone 1: Project Understanding and Setup.
