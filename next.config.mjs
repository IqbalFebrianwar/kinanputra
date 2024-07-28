/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
            pathname: "/dehqnfmjw/image/upload/**",
          },
        ],
      },
};

export default nextConfig;
