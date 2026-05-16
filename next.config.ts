import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/api/:path*",
      },
    ];
  },
  //permisos para cargar imagens
  //next.js por seguridad bloquea imagenes que venga de otro servidores por seguridad
  images: {
    unoptimized:true,
    remotePatterns:[
      {
        //hey next.js confia en imagens que venga de esta ruta
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/images/**",
      },
    ]
  }
};

export default nextConfig;
