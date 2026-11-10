
# Project Requirements

## 1. Project Overview

Last-Mile Delivery & Route Optimization is a logistics management platform that automates package-to-driver allocation, optimizes delivery routes, and assists with delivery recovery when disruptions occur.

## 2. Functional Requirements

### FR1: Driver Management
- Add and view drivers.
- Update driver availability.
- Track driver status.

### FR2: Vehicle Management
- Add vehicles and their carrying capacities.
- Associate vehicles with drivers.
- Track vehicle availability.

### FR3: Package Management
- Create, view and update packages.
- Store delivery addresses, coordinates, weight and deadlines.
- Track package delivery status.

### FR4: Automated Dispatch
- Allocate packages to suitable drivers.
- Consider driver availability and vehicle capacity.
- Avoid invalid or duplicate assignments.

### FR5: Route Optimization
- Generate efficient delivery sequences.
- Consider distance, capacity and delivery deadlines.
- Return feasible routes for assigned drivers.

### FR6: Route Visualization
- Display delivery stops and routes on a map.
- Show driver-wise route information.

### FR7: Dynamic Reassignment
- Simulate driver unavailability.
- Identify undelivered packages.
- Find alternative drivers.
- Recalculate affected routes.
- Save approved reassignment changes.

### FR8: AI-Assisted Recovery
- Use Gemini to understand delivery disruptions.
- Coordinate approved tools.
- Generate explanations and recovery recommendations.
- Require backend validation and manager approval.

### FR9: Performance Tracking
- Track delivery completion.
- Compare planned and simulated actual performance.
- Display basic operational metrics.

## 3. Non-Functional Requirements

- Reliability: Prevent package loss and invalid assignments.
- Scalability: Keep the architecture extensible.
- Performance: Generate feasible dispatch and route plans efficiently.
- Security: Protect API access and credentials.
- Maintainability: Keep components modular and understandable.
- Consistency: Maintain accurate assignment and delivery status.

## 4. Initial Scope Boundaries

The initial version will use simulated packages, drivers, delivery progress and disruptions.

The following are outside the initial scope:
- Live GPS tracking.
- Real fleet integration.
- Live traffic prediction.
- Customer-facing mobile application.
- Payment processing.
- Push notifications.
