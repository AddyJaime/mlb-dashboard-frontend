// intermediario que habla con el front end para traer la data al front end 
import { API_BASE_URL } from "@/config/api";
import { Stadium } from "@/types/stadium";
import { StadiumAPI } from "@/types/stadium-api";




export async function getAllStadiums(): Promise<Stadium[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stadiums`, {next: {revalidate: 3600}})
    const data = await response.json()

    const stadiums = data.data.map((item: StadiumAPI) => {
      return {
        id: item.id,
        name: item.name,
        team: item.name_team,
        city: item.city,
        state: item.state,
        capacity: item.capacity,
        yearOpen: item.year_open,
        imageUrl: item.image_url,
        league: item.league

      }
    })


    return stadiums

  } catch (error) {
    console.error("Error fetching stadiums:", error)
    throw new Error("Failed to fetch stadium")
  }

}


export async function getStadiumById(id: number): Promise<Stadium> {
  // y ese stadium ahi es la promessa que espera el frontend 
  try {
    const response = await fetch(`${API_BASE_URL}/api/stadiums/${id}`)
    const data = await response.json()
    // Si el API envuelve la respuesta en { data: ... } usa data.data, si no, usa data directo, el stadiumAPi es el tipo de como vienen los datos del backend 
    const item: StadiumAPI = data.data ?? data

    // Transforma los campos snake_case del API al camelCase que usa el frontend
    return {
      id: item.id,
      name: item.name,
      team: item.name_team,
      city: item.city,
      state: item.state,
      capacity: item.capacity,
      yearOpen: item.year_open,
      imageUrl: item.image_url,
      league: item.league
    }

  } catch (error) {
    console.error("Error fetching stadium:", error)
    throw new Error("Failed to fetch stadium")
  }
}