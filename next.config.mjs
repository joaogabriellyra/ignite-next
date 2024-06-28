/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'plus.unsplash.com'
    },
    {
      hostname: 'github.com'
    }
  ],
  },

};

export default nextConfig;
