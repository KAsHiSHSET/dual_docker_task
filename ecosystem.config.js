module.exports = {
  apps: [
    {
      name: "my-app",
      script: "app.js",
      exec_mode: "cluster",
      instances: "max",
      watch: false
    }
  ]
};