// StadiumAPI refleja cómo viene
//    la data del backend         
//   (snake_case), y Stadium es
//   cómo la usas en el frontend  
//   (camelCase). Por eso tienes
//   el .map() en el servicio que 
//   convierte de uno al otro.

export type Stadium = {
  id: number
  name: string
  team: string
  city: string
  state: string
  capacity: number
  yearOpen: number
  imageUrl:string
  league: "AL" | "NL"
} 