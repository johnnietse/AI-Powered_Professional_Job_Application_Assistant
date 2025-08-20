// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };

// // export default nextConfig;


// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   async rewrites() {
// //     return [
// //       {
// //         source: '/api/:path*',
// //         destination: 'http://localhost:5000/api/:path*',
// //       },
// //     ];
// //   },
// // };

// // module.exports = nextConfig;

// // frontend/next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async rewrites() {
//       return [
//         {
//           source: '/api/:path*',
//           destination: 'http://localhost:5000/api/:path*', // Use IPv4 address
//         },
//       ];
//     },
//   };
  
//   module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://127.0.0.1:5000/api/:path*', // forces IPv4
        },
      ];
    },
  };
  
  export default nextConfig;
  