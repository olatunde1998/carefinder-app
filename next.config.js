/** @type {import('next').NextConfig} */
// const nextConfig = {
    
// }

// module.exports = nextConfig

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
  }
 
 module.exports = nextConfig