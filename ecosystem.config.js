module.exports = {
  apps: [
    {
      name: "config-server",
      script: "java",
      args: "-jar ./config-server/target/config-server-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/config-server.log",
    },
    {
      name: "service-registry",
      script: "java",
      args: "-jar ./service-registry/target/service-registry-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/service-registry.log",
    },
    {
      name: "api-gateway",
      script: "java",
      args: "-jar ./api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/api-gateway.log",
    }
  ]
};