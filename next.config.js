/** @type {import('next').NextConfig} */
// const nextConfig = {
    
// }

// module.exports = nextConfig

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ss3.4sqi.net',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
  }
 
 module.exports = nextConfig