/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "www.google.com",
      "images.nightcafe.studio",
      "images.unsplash.com",
      "www.w3.org",
      "github.com",
      "banner2.cleanpng.com",
      "mirrors.creativecommons.org",
    ],
  },
  optimizeFonts: true,
};

export default nextConfig;
