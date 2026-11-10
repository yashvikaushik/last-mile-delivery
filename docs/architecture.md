
# System Architecture

## 1. Architecture Overview

The project follows a modular backend architecture with separately running optimization and AI services.

### Components

1. Frontend — React + TypeScript
   - Provides the manager dashboard.
   - Manages forms, tables and map visualization.
   - Communicates with the backend through HTTP APIs.

2. Backend — Node.js + Express
   - Exposes REST APIs.
   - Handles business logic and validation.
   - Coordinates the optimizer and AI services.
   - Owns application database access.

3. Database — PostgreSQL
   - Stores drivers, vehicles, packages, dispatches, routes and reassignment history.

4. Optimization Service — Python + OR-Tools
   - Receives driver and package information.
   - Calculates feasible package allocations and delivery sequences.
   - Returns structured optimization results.

5. AI Agent — Python + Google Gemini
   - Analyzes delivery disruptions.
   - Uses approved tools to retrieve information and request recovery plans.
   - Explains recommendations.
   - Does not directly modify database records.

6. Map — Leaflet + OpenStreetMap
   - Displays delivery locations and calculated routes.

## 2. High-Level Request Flow

Manager
   |
   v
React Frontend
   |
   | HTTP / REST API
   v
Node.js + Express Backend
   |
   |---- PostgreSQL
   |
   |---- Python Optimization Service
   |
   |---- Gemini AI Agent (when required)
   |
   v
Validated Results
   |
   v
React Dashboard

## 3. Dispatch Workflow

1. Manager creates packages and manages drivers.
2. Frontend sends data to the backend.
3. Backend validates and stores the information.
4. Manager triggers dispatch.
5. Backend retrieves eligible drivers and packages.
6. Backend requests an optimization plan.
7. Python + OR-Tools calculates feasible assignments and routes.
8. Backend validates and stores the results.
9. Frontend displays assignments and routes.

## 4. Disruption Recovery Workflow

1. A driver becomes unavailable.
2. Backend identifies affected undelivered packages.
3. Gemini receives the disruption context.
4. Gemini requests relevant information and an optimization plan through approved tools.
5. Python + OR-Tools calculates a recovery plan.
6. Gemini explains the recommendation.
7. Manager reviews and approves the proposal.
8. Backend validates and saves the reassignment.
9. Dashboard displays the updated plan.

## 5. Important Architecture Rules

- React must not access PostgreSQL directly.
- Backend owns application database writes.
- Optimizer performs calculations, not database mutations.
- Gemini cannot bypass backend authorization or validation.
- Backend remains responsible for saving approved changes.
- Each component has a clearly defined responsibility.
