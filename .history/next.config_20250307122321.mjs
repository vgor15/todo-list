// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/todo-list", // Replace with your GitHub repo name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
