module.exports = {
  api: {
    input: "./spec.yaml",
    output: {
      mode: "tags-split",
      target: "./src/@sln/service/api/api.ts",
      schemas: "./src/@sln/service/model",
      client: "react-query",
      mock: false,
    },
  },
};
