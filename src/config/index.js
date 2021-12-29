const env = process.env.NODE_ENV || "development";

let cache;

const config = () => {
  if (!cache) {
    cache = Object.freeze({
      env,
      secrets: {
        apiHost: "http://adminservice-env.eba-ubpbf6se.us-east-2.elasticbeanstalk.com/index.php/api",
      },
    });
  }
  return cache;
};

export default config;
