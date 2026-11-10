
# Architecture and Technology Decisions

## 1. Frontend: React + TypeScript

Reason:
- Component-based development.
- Reusable UI.
- Type safety.
- Good ecosystem for dashboards.

## 2. Backend: Node.js + Express + TypeScript

Reason:
- JavaScript/TypeScript across frontend and backend.
- Lightweight REST API development.
- Modular application structure.
- Easy integration with external services.

## 3. Database: PostgreSQL

Reason:
- Relational data modelling.
- Strong constraints and transactions.
- Suitable for drivers, packages, routes and dispatch relationships.
- PostGIS can be introduced if advanced geospatial queries become necessary.

## 4. Optimization: Python + Google OR-Tools

Reason:
- OR-Tools provides constraint-based optimization.
- Python has a suitable optimization ecosystem.
- Separating the optimizer gives it an independent runtime.

## 5. AI: Google Gemini API

Reason:
- Used for interpreting disruptions and coordinating recovery tools.
- Supports structured tool/function calling.
- Keeps AI assistance separate from deterministic optimization.

## 6. Maps: Leaflet + OpenStreetMap

Reason:
- Open-source mapping ecosystem.
- Supports displaying routes and delivery locations.
- Suitable for our initial simulated delivery system.

## 7. Architecture: Modular Backend + Separate Services

Decision:
- Node.js backend will be a modular monolith.
- Python optimizer will run as a separate service.
- AI agent will run as a separate service when implemented.

Reason:
- Keeps responsibilities clear.
- Avoids unnecessary microservice complexity in the core backend.
- Allows optimization and AI components to have independent runtimes.
