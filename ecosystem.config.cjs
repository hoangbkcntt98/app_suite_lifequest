module.exports = {
  apps: [
    {
      name: "lifequest",
      cwd: __dirname,
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
        PORT: "3004",
        NEXT_PUBLIC_LIFEQUEST_BASE_PATH: "/lifequest",
      },
    },
  ],
};
