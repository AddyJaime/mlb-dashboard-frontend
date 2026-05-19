export const API_BASE_URL = typeof window === "undefined"
    ? (process.env.BACKEND_URL ||
  "http://localhost:3000")
    : ""
// "" el valor cuando es el browser


// cuando api es ""
// el fetch queda asi: "" +  "/api/stadiums"
  // Una URL que empieza con / significa "usa el mismo servidor donde estoy"

  // process.env es el objecto de node.js que contiene tdoas las variables de entorno 
  // cuando el container del front end arranca  docker-compose le pasa
  // BACKEND_URL=http://backend:3000.
  // Node.js lo recibe y lo mete en
  // process.env. Entonces
  // process.env.BACKEND_URL vale
  // "http://backend:3000".