const env = process.env.NODE_ENV || "development";

let cache;

const config = () => {
  if (!cache) {
    cache = Object.freeze({
      env,
      secrets: {
        apiHost: "/api/index.php/api",
      },
    });
  }
  return cache;
};

export default config;
