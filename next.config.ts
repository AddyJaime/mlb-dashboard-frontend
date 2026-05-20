import type { NextConfig } from "next";

// Es una variable que lee del entorno
  // en tiempo de ejecución
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000"

const nextConfig: NextConfig = {
  // este output es importante ya que evita que se copie todo el fodler de node module cuando 
  // net compila se crea esta carpeta que contiene serverj.js y solo los paquetes necesarios 
  output: 'standalone',
  async rewrites() {
    return [
      {
        // cuando alguien pida cualquier ruta uqe empiececon /api/
        source: "/api/:path*",
        // manda esta petcion al backed
        destination: `${BACKEND_URL}/api/:path*`,
        
      },
    
      
    ];
  },
  //permisos para cargar imagens
  //next.js por seguridad bloquea imagenes que venga de otro servidores por seguridad
  images: {
    unoptimized:true,
  }
};

export default nextConfig;
