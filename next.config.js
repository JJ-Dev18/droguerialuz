
const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

module.exports = {
  
};
module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
    return config;
  },
  images: {
    domains: [
      "assets.vercel.com",
      "lh3.googleusercontent.com",
      "www.droguerialuzmar.com.co",
      "locatelcolombia.vtexassets.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
});

// module.exports = {
//   stricted : true
// }