// Para StadiumAPI:                                               
  // Representa la forma en que el backend envía los datos
  // (snake_case) 
export type StadiumAPI = {
  id: number
  name: string
  name_team: string
  city: string
  state: string
  capacity: number
  year_open: number
  image_url: string
}