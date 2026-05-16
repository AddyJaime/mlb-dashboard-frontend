export const API_BASE_URL = typeof window === "undefined" ? "http://localhost:3000" : ""

// cuando api es ""
// el fetch queda asi: "" +  "/api/stadiums"
  // Una URL que empieza con / significa "usa el mismo servidor donde estoy"