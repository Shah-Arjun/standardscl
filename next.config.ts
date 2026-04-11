import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], qualities: [75, 80, 85, 90, 95, 100], 
  },
};


export default nextConfig;
