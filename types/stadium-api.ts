// Para StadiumAPI:                                               
  // Representa la forma en que el backend envía los datos
  // (snake_case) 
export type StadiumAPI = {
  id: number
  name: string
  name_team: string
  city: string
  state: string
  description: string
  longitude: number
  latitude: number
  left_field_ft: number
  center_field_ft: number    
  right_field_ft: number
  total_games :number
  home_win_percentage: number
  perfect_games: number 
  capacity: number
  year_open: number
  image_url: string
  league: "AL" | "NL"
}