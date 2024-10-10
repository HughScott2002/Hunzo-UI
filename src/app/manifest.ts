import { MetadataRoute } from "next";
import { appName, appDescription } from "@/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appName,
    short_name: appName,
    description: appDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "@/public/icons/logo.svg",
        sizes: "any",
        // type: "image/x-icon",
      },
    ],
  };
}
