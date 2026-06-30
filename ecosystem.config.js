module.exports = {
  apps: [{
    name: "apex-admin",
    script: "serve",
    args: "-s build -l 4000",
    cwd: "/root/apex_auto/apex-admin",
    instances: 1,
    exec_mode: "fork",
    autorestart: true,
    watch: false,
    max_memory_restart: "500M",
    env: {
      NODE_ENV: "production",
      PORT: 4000
    }
  }]
}