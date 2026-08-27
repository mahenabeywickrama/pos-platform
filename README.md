# POS: Platform Services

> **GitHub Repository About Description:**
> *Spring Cloud Platform Infrastructure for POS containing Config-Server, Service-Registry, and Api-Gateway as Git submodules.*

## About

This project is part of the Enterprise Cloud Architecture (ECA) module in the Higher Diploma in Software Engineering (HDSE) program at the Institute of Software Engineering (IJSE).

## Student & Submission Information

| Field | Details               |
| :--- |:----------------------|
| **Student Name** | Mahen Abeywickrama    |
| **Student Number** | 241711112             |
| **GCP Project ID** | `pos-project-506311`     |
| **GCP Region** | `asia-south2` (Delhi) |

## Project Description

This is the **parent repository** for the platform infrastructure layer of POS, a cloud-native Point-of-Sale system built on a microservice architecture. It brings together the three Spring Cloud components that provide the distributed infrastructure foundation for all domain microservices: centralized configuration, service discovery, and API routing. Each component is maintained in its own repository and included here as a Git submodule.

## Tech Stack

| Technology | Details |
|---|---|
| Java | 25 |
| Spring Boot | 4.1.0 |
| Spring Cloud | 2025.1.2 |
| Build Tool | Apache Maven |
| Version Control | Git submodules (polyrepo architecture) |

## Submodules

| Module | Port | Description | Repository |
|---|---|---|---|
| **Config-Server** | `9000` | Centralized, externalized configuration for all microservices via native filesystem backend | [Config-Server](#) |
| **Service-Registry** | `9001` | Netflix Eureka server for service registration and discovery | [Service-Registry](#) |
| **Api-Gateway** | `7000` | Reactive Spring Cloud Gateway, the single entry point routing traffic to backend services | [Api-Gateway](#) |

## Setup / Getting Started

### Cloning with Submodules

```bash
git clone --recurse-submodules https://github.com/mahenabeywickrama/pos-platform.git
```

If already cloned without submodules:

```bash
git submodule update --init --recursive
```

### Startup Order

Platform services must be started in the following order, since each depends on the one before it being available:

1. **Config-Server** (`9000`) — must start first; all other services fetch their configuration from here
2. **Service-Registry** (`9001`) — registers with nothing, but is required before any service can discover others
3. **Api-Gateway** (`7000`) — depends on Service-Registry to resolve routes to downstream services

```bash
# 1. Config Server
cd config-server
./mvnw spring-boot:run

# 2. Service Registry
cd ../service-registry
./mvnw spring-boot:run

# 3. Api Gateway
cd ../api-gateway
./mvnw spring-boot:run
```

### Updating Submodules

To pull the latest changes across all submodules:

```bash
git submodule update --remote --merge
```